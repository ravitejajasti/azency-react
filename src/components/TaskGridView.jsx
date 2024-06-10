import React from 'react';
import TaskCard from './TaskCard'; // Import your TaskCard component
import useTaskDetailsOffcanvas from '../hooks/useTaskDetailsOffCanvas';
import OffCanvas from './OffCanvas'; // Import OffCanvas component
import TaskForm from './TaskForm'; // Import TaskForm component

const TaskGridView = ({ projectId, sections, users, tasks, onUpdateTask }) => {
    console.log(`sec: ${sections}`)

    const {
        showOffcanvas,
        handleCloseOffcanvas,
        handleTaskClick,
        handleTaskUpdate,
        taskDetails,
    } = useTaskDetailsOffcanvas(null, onUpdateTask);

    const handleAddTaskClick = (e) => {
        e.preventDefault();
        handleTaskClick(); // Show offcanvas

        // Your logic for adding a task
        console.log('Add task clicked');
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        // Your logic for canceling a task creation
        console.log('Cancel task creation');
    };

    const handleCreateTaskClick = (e) => {
        e.preventDefault();
        // Your logic for creating a task
        console.log('Create task clicked');
    };

    const handleCreateGroupClick = (e) => {
        e.preventDefault();
        // Your logic for creating a group
        console.log('Create group clicked');
    };

    return (
        <div className="content container-fluid kanban-board">
            {/* Kanban Row */}
            <ul className="row list-unstyled kanban-board-row">
                {sections.map((section) => (
                    <li
                        key={section.id}
                        className="js-add-field col-12"
                        data-hs-add-field-options={`{
                            "template": "#createProjectGridTemplateToDo",
                            "container": "#createProjectGridContainerToDo",
                            "defaultCreated": 0
                        }`}
                    >
                        {/* Title */}
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
                        <div className="js-sortable">
                            {/* Card */}
                            {section.tasks.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    projectId={projectId}
                                    task={task}
                                    onUpdateTask={onUpdateTask}
                                    users={users}
                                    sections={sections}
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
                                onClick={handleAddTaskClick} // Removed data-bs-toggle and data-bs-target
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
                        onClose={handleCloseOffcanvas}
                        onUpdateTask={handleTaskUpdate}
                        users={users} // Pass users to TaskForm
                        sections={sections}
                    />
                </OffCanvas>
            )}
            {/* End OffCanvas */}
        </div>
    );
};

export default TaskGridView;
