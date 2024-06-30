import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useTaskHandlers = (projectId, setTasks, setSections) => {
    const { authTokens } = useContext(AuthContext);

    const handleUpdateTask = (updatedTask) => {
        setTasks((prevTasks) => 
            prevTasks.map((task) => 
                task.id === updatedTask.id ? updatedTask : task
            )
        );

        setSections((prevSections) => {
            let newSections = prevSections.map((section) => ({
                ...section,
                tasks: section.tasks.filter((task) => task.id !== updatedTask.id)
            }));

            const targetSectionIndex = newSections.findIndex(
                (section) => section.id === updatedTask.section
            );

            if (targetSectionIndex !== -1) {
                newSections[targetSectionIndex].tasks.push(updatedTask);
            }

            return newSections;
        });
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await axios.delete(`http://localhost:8000/projects/${projectId}/tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${authTokens?.access}`
                }
            });

            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

            setSections((prevSections) => prevSections.map((section) => ({
                ...section,
                tasks: section.tasks.filter((task) => task.id !== taskId)
            })));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return { handleUpdateTask, handleDeleteTask };
};

export default useTaskHandlers;
