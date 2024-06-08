import { useState, useEffect } from 'react';

const useTaskDetailsOffcanvas = (initialTask, onUpdateTask) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [taskDetails, setTaskDetails] = useState(initialTask);

  useEffect(() => {
    setTaskDetails(initialTask);
  }, [initialTask]);

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleTaskClick = () => handleShowOffcanvas();
  const handleTaskUpdate = (updatedTask) => {
    setTaskDetails(updatedTask);
    onUpdateTask(updatedTask);
  };

  return {
    showOffcanvas,
    taskDetails,
    handleShowOffcanvas,
    handleCloseOffcanvas,
    handleTaskClick,
    handleTaskUpdate,
  };
};

export default useTaskDetailsOffcanvas;
