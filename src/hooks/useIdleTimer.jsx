import { useEffect, useRef } from 'react';

const useIdleTimer = (logoutFn, timeout = 300000) => {
    const timer = useRef(null);

    useEffect(() => {
        const handleActivity = () => {
            console.log('User activity detected, resetting timer');
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                console.log('User idle timeout, calling logout function');
                logoutFn();
            }, timeout);
        };

        // List of events to track user activity
        const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];

        // Add event listeners for each activity event
        events.forEach(event => {
            window.addEventListener(event, handleActivity);
        });

        // Set initial timeout
        handleActivity();

        return () => {
            console.log('Cleaning up event listeners and timeout');
            // Cleanup event listeners and timeout on unmount
            events.forEach(event => {
                window.removeEventListener(event, handleActivity);
            });
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, [logoutFn, timeout]);

    return null; // This hook does not render anything
};

export default useIdleTimer;
