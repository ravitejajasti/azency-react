import { useState, useCallback } from 'react';

const useTaskDetailsOffcanvas = (initialTask, onUpdateTask) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [taskDetails, setTaskDetails] = useState(initialTask);

    const handleTaskClick = useCallback((task) => {
        setTaskDetails(task);
        setShowOffcanvas(true);
    }, []);

    const handleTaskUpdate = useCallback((updatedTask) => {
        onUpdateTask(updatedTask);
        setTaskDetails(updatedTask); // Update task details in the offcanvas
    }, [onUpdateTask]);

    const handleCloseOffcanvas = useCallback(() => {
        setShowOffcanvas(false);
    }, []);

    return {
        showOffcanvas,
        taskDetails,
        handleTaskClick,
        handleTaskUpdate,
        handleCloseOffcanvas,
    };
};

export default useTaskDetailsOffcanvas;
