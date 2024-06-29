import React, { useEffect, useContext, useRef } from 'react';
import Sortable from 'sortablejs';
import TaskCard from './TaskCard';
import useTaskDetailsOffcanvas from '../hooks/useTaskDetailsOffCanvas';
import OffCanvas from './OffCanvas';
import TaskForm from './TaskForm';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const TaskGridView = ({ projectId, sections, users, tasks, onUpdateTask, onDeleteTask }) => {
    const {
        showOffcanvas,
        handleCloseOffcanvas,
        handleTaskClick,
        handleTaskUpdate,
        taskDetails,
    } = useTaskDetailsOffcanvas(null, onUpdateTask);

    const handleAddTaskClick = (e) => {
        e.preventDefault();
        handleTaskClick({}); // Show offcanvas with an empty task for creation
    };

    const handleCreateGroupClick = (e) => {
        e.preventDefault();
        console.log('Create group clicked');
    };

    const sectionRefs = useRef([]);
    const { authTokens } = useContext(AuthContext);

    useEffect(() => {
        sectionRefs.current.forEach((sectionRef, index) => {
            if (sectionRef) {
                Sortable.create(sectionRef, {
                    // forceFallback: true,
                    animation: 150,
                    group: 'listGroup',
                    delay: 500,
                    delayOnTouchOnly: true,
                    onEnd: async (event) => {
                        const { from, to, item } = event;
                        const fromSectionId = from.getAttribute('data-section-id');
                        const toSectionId = to.getAttribute('data-section-id');
                        const taskId = item.getAttribute('data-task-id');
                        console.log(fromSectionId, toSectionId, taskId, authTokens)
                        if (fromSectionId !== toSectionId && taskId) {
                            console.log(`Task ${taskId} moved from section ${fromSectionId} to section ${toSectionId}`);
                            // Update task section in state or call an API to update the task's section
                            // onUpdateTask(taskId, { sectionId: toSectionId });
                            try {
                                const resp = await axios.get(`http://localhost:8000/projects/${projectId}/tasks/${taskId}/`, {
                                    headers: {
                                        Authorization: `Bearer ${authTokens?.access}`
                                      }
                            });
                                const updatedTask = resp.data;
                                console.log(updatedTask)
                                updatedTask.section = toSectionId
                                await axios.put(`http://localhost:8000/projects/${projectId}/tasks/${taskId}/`, updatedTask, {
                                    headers: {
                                        Authorization: `Bearer ${authTokens?.access}`
                                      }
                                })
                            } catch (error) {
                                console.error(error)
                            }
                        }
                    },
                });
            }
        });
    }, [sections]);

    return (
        <div className="content container-fluid kanban-board">
            {/* Kanban Row */}
            <ul className="row list-unstyled kanban-board-row">
                {sections.map((section, index) => (
                    <li key={section.id} className="js-add-field col-12">
                        <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                            <h6 className="text-cap mb-0">{section.name}</h6>
                            <a
                                className="js-create-field btn btn-white btn-icon btn-xs"
                                href="#"
                                onClick={handleAddTaskClick}
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add task"
                            >
                                <i className="bi-plus" />
                            </a>
                        </div>
                        {/* End Title */}
                        <div
                            className="js-sortable"
                            ref={(el) => (sectionRefs.current[index] = el)}
                            data-section-id={section.id}
                        >
                            {/* Card */}
                            {section.tasks && section.tasks.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    projectId={projectId}
                                    task={task}
                                    onUpdateTask={onUpdateTask}
                                    users={users}
                                    sections={sections}
                                    onTaskClick={handleTaskClick}
                                    onDeleteTask={onDeleteTask}
                                />
                            ))}
                            {/* End Card */}
                        </div>

                        {/* Container For Input Field */}
                        <div id="createProjectGridContainerToDo" />
                        {/* Card */}
                        <div className="d-grid">
                            <a
                                className="btn btn-white btn-dashed-outline"
                                type="button"
                                onClick={handleAddTaskClick}
                            >
                                <i className="bi-plus"></i> Add task
                            </a>
                        </div>
                        {/* End Card */}
                    </li>
                ))}

                <li className="col-12">
                    {/* Title */}
                    <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                        <h6 className="text-cap mb-0">Create a new group</h6>
                        <div className="js-sortable" />
                        <a
                            className="btn btn-white btn-icon btn-xs"
                            href="#"
                            onClick={handleCreateGroupClick}
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Create group"
                        >
                            <i className="bi-plus" />
                        </a>
                    </div>
                    {/* End Title */}
                </li>
            </ul>
            {/* End Kanban Row */}
            {/* OffCanvas */}
            {showOffcanvas && (
                <OffCanvas show={showOffcanvas} onClose={handleCloseOffcanvas} title="Create a Task">
                    <TaskForm
                        projectId={projectId}
                        initialDetails={taskDetails}
                        onClose={handleCloseOffcanvas}
                        onUpdateTask={handleTaskUpdate}
                        users={users}
                        sections={sections}
                    />
                </OffCanvas>
            )}
            {/* End OffCanvas */}
        </div>
    );
};

export default TaskGridView;
