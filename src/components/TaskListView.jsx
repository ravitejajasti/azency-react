import React, { useState, useEffect, useContext } from 'react';
import TaskForm from './TaskForm';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import useTaskDetailsOffcanvas from '../hooks/useTaskDetailsOffCanvas';

const TaskListView = ({ projectId, onUpdateTask, tasks, users, sections }) => {
  const {
    showOffcanvas,
    handleCloseOffcanvas,
    handleTaskClick,
    handleTaskUpdate,
    taskDetails,
  } = useTaskDetailsOffcanvas(null, onUpdateTask);

  return (
    <div className="splitted-content-main">
      <div className="container-fluid d-flex">
        <style>
          {`
            @media (min-width: 768px) {
              .js-offcanvas-start {
                z-index: 98 !important;
              }
            }
            @media (max-width: 768px) {
              .js-offcanvas-start {
                z-index: 1041;
              }
            }
          `}
        </style>
        {/* Offcanvas Content */}
        <div
          className={`js-offcanvas-start offcanvas offcanvas-start splitted-content-small splitted-content-bordered d-flex flex-column ${showOffcanvas ? 'show' : ''}`}
          tabIndex={-1}
          id="splittedOffcanvasContent"
        >
          <div className="offcanvas-body">
            <div className="content container-fluid">
              {/* Kanban List */}
              <ul className="list-inline">
                {sections.map((section, index) => (
                  <li key={index}>
                    {/* Title */}
                    <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                      <h6 className="text-cap mb-0">{section.name}</h6>
                      <a
                        className="js-create-field btn btn-icon btn-sm btn-white"
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add project"
                      >
                        <i className="bi-plus" />
                      </a>
                    </div>
                    {/* End Title */}
                    <div className="js-sortable">
                      {section.tasks.map((task) => (
                        <div
                          key={task.id}
                          className="js-sortable-link sortablejs-custom-handle card mb-3"
                          data-href="#"
                          onClick={() => handleTaskClick(task)}
                        >
                          <div className="card-body">
                            <div className="row">
                              <div className="col">
                                <h4 className="text-wrap">{task.title}</h4>
                              </div>
                              {/* End Col */}
                              <div className="col-auto">
                                {/* Dropdown */}
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
                                    id={`kanbanProjectsListDropdown${task.id}`}
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi-three-dots-vertical" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby={`kanbanProjectsListDropdown${task.id}`}
                                  >
                                    <a className="dropdown-item" href="#">
                                      <i className="bi-pencil dropdown-item-icon" /> Rename project
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi-star dropdown-item-icon" /> Add to favorites
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi-archive dropdown-item-icon" /> Archive project
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item text-danger" href="#">
                                      <i className="bi-trash dropdown-item-icon text-danger" />
                                      Remove
                                    </a>
                                  </div>
                                </div>
                                {/* End Dropdown */}
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-sm-auto mb-3 mb-sm-0">
                                <span className="d-block fs-6">{task.assignees} Assignees</span>
                              </div>
                              {/* End Col */}
                              <div className="col-auto mb-3 mb-sm-0">
                                <div className="text-center">
                                  <span className="d-block h4 mb-1">{task.tasks}</span>
                                  <span className="d-block fs-6">Tasks</span>
                                </div>
                              </div>
                              {/* End Col */}
                              <div className="col-auto mb-3 mb-sm-0">
                                <div className="text-center">
                                  <span className="d-block h4 mb-1">{task.complete}</span>
                                  <span className="d-block fs-6">Complete</span>
                                </div>
                              </div>
                              {/* End Col */}
                              <div className="col-auto mb-3 mb-sm-0">
                                <div className="text-center">
                                  <span className="d-block h4 mb-1">{task.completed}</span>
                                  <span className="d-block fs-6">Completed</span>
                                </div>
                              </div>
                              {/* End Col */}
                            </div>
                            {/* End Row */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
                {/* Divider */}
                <li>
                  <hr className="my-7" />
                </li>
              </ul>
              {/* End Kanban List */}
            </div>
          </div>
        </div>
        {/* End Offcanvas Content */}
        
        {/* Fluid Content */}
        <div className="splitted-content-fluid content-space">
          {/* Toggles */}
          <div className="d-flex d-xl-none justify-content-end mt-3 me-3">
            <ul className="list-inline">
              <li className="list-inline-item">
                {/* Offcanvas Toggle */}
                <button
                  className="navbar-toggler splitted-content-toggle"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#splittedOffcanvasContent"
                  aria-controls="splittedOffcanvasContent"
                >
                  <span className="navbar-toggler-default">
                    <i className="bi-list" />
                  </span>
                  <span className="navbar-toggler-toggled">
                    <i className="bi-x" />
                  </span>
                </button>
                {/* End Offcanvas Toggle */}
              </li>
              <li className="list-inline-item">
                {/* Navbar Vertical Toggle */}
                <button
                  type="button"
                  className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler position-static"
                >
                  <i
                    className="bi-arrow-bar-left navbar-toggler-short-align"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Collapse"
                  />
                  <i
                    className="bi-arrow-bar-right navbar-toggler-full-align"
                    data-bs-template="<div class=&quot;tooltip d-none d-sm-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Expand"
                  />
                </button>
                {/* End Navbar Vertical Toggle */}
              </li>
            </ul>
          </div>
          {/* End Toggles */}
          
          <div className="mt-xl-10">
            {/* Title */}
            {taskDetails ? (
              <TaskForm
                key={taskDetails.id}
                projectId={projectId}
                initialDetails={taskDetails}
                onClose={handleCloseOffcanvas}
                onUpdateTask={handleTaskUpdate}
                users={users}
                sections={sections}
              />
            ) : (
              <div className="text-center">
                <h1>Select a task to see details</h1>
              </div>
            )}
            {/* End Title */}
          </div>
        </div>
        {/* End Fluid Content */}
      </div>
    </div>
  );
};

export default TaskListView;
