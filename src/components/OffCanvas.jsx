import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const OffCanvas = ({ children, show, onClose, title }) => {
    const offcanvasRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (show && offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [show, onClose]);

    useEffect(() => {
        const handleBackdropClick = (event) => {
            if (show && event.target.classList.contains('offcanvas-backdrop')) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        document.addEventListener('click', handleBackdropClick, true);
        return () => {
            document.removeEventListener('click', handleBackdropClick, true);
        };
    }, [show]);

    return show
        ? ReactDOM.createPortal(
            <>
                <div className="offcanvas-backdrop show" />
                <div className="offcanvas offcanvas-end show" tabIndex={-1} ref={offcanvasRef}>
                    <div className="offcanvas-header">
                        <h5>{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {children}
                    </div>
                </div>
            </>,
            document.body
        )
        : null;
};

export default OffCanvas;
