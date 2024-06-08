import React from 'react';
import TaskCard from './TaskCard'; // Import your TaskCard component
import useTaskDetailsOffcanvas from '../hooks/useTaskDetailsOffCanvas';

const TaskGridView = ({ tasks, onUpdateTask }) => {
  const handleAddTaskClick = (e) => {
    e.preventDefault();
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

  const {showOffcanvas, handleCloseOffcanvas, handleTaskClick} = useTaskDetailsOffcanvas

  return (
    <div className="content container-fluid kanban-board">
      {/* Kanban Row */}
      <ul className="row list-unstyled kanban-board-row">
        {tasks.map((section) => (
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
                  projectId={section.project.id}
                  task={task}
                  onUpdateTask={onUpdateTask}
                />
              ))}
              {/* End Card */}
            </div>

            {/* Container For Input Field */}
            <div id="createProjectGridContainerToDo" />
            {/* Card */}
            <div className="d-grid">
                <a className="btn btn-white btn-dashed-outline" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i className="bi-plus"></i> Add task
                </a>
            </div>
            {/* End Card */}
            {/* OffCanvas */}
            {showOffcanvas && (
                <OffCanvas show={showOffcanvas} onClose={handleCloseOffcanvas} title="Edit Task">
                    <TaskForm projectId={projectId} onClose={handleCloseOffcanvas} onUpdateTask={handleTaskUpdate} />
                </OffCanvas>
            )}
            {/* <div className="offcanvas offcanvas-end shadow-lg" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header card-header bg-img-start" style={{backgroundImage: 'url(/static/assets/svg/components/card-6.svg)',}} bis_skin_checked="1" element-id="106">
                <h2 className="offcanvas-title" id="offcanvasRightLabel">Create a Task</h2>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" id="taskFormPlaceholder">
                </div>
            </div> */}
            {/* End OffCanvas */}
            {/* Add Create task Template */}
            <form id="createProjectGridTemplateToDo" style={{ display: 'none' }}>
              <div
                className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle"
                data-href="#"
              >
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="mb-4">
                      <textarea
                        className="form-control"
                        placeholder="What needs to be done?"
                        data-name="body"
                        aria-label="What needs to be done?"
                        defaultValue={''}
                      />
                    </div>
                    <div className="d-flex justify-content-end gap-3">
                      <a className="js-delete-field btn btn-white btn-sm" href="#" onClick={handleCancelClick}>
                        Cancel
                      </a>
                      <a className="btn btn-primary btn-sm" href="#" onClick={handleCreateTaskClick}>
                        Create
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* End Add Create task Template */}
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
    </div>
  );
};

export default TaskGridView;