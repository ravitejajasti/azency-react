import React from 'react';
import OffCanvas from './OffCanvas';
import TaskForm from './TaskForm';

export default function TaskCard({ projectId, task, onUpdateTask, users, sections, onTaskClick }) {
    const handleClick = () => {
        onTaskClick(task);
    };

    return (
        <>
            {/* Card */}
            <div
                className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle"
                data-href="#"
                data-task-id={task.id}
                onClick={handleClick}
            >
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex mb-5">
                            <div className="me-2">
                                <h4 className="text-wrap">{task.title}</h4>
                            </div>
                            <div className="ms-auto">
                                {/* Dropdown */}
                                <div className="dropdown">
                                    <button
                                        type="button"
                                        className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
                                        id="kanbanProjectsGridDropdown1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={(e) => e.stopPropagation()} // Stop event propagation
                                    >
                                        <i className="bi-three-dots-vertical" />
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown1">
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
                                            <i className="bi-trash dropdown-item-icon text-danger" /> Remove
                                        </a>
                                    </div>
                                </div>
                                {/* End Dropdown */}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                {/* Stats */}
                                <div className="text-center">
                                    <span className="d-block h4 mb-1">20</span>
                                    <span className="d-block fs-6">Tasks</span>
                                </div>
                                {/* End Stats */}
                            </div>
                            {/* End Col */}
                            <div className="col-4">
                                {/* Stats */}
                                <div className="text-center">
                                    <span className="d-block h4 mb-1">0</span>
                                    <span className="d-block fs-6">Complete</span>
                                </div>
                                {/* End Stats */}
                            </div>
                            {/* End Col */}
                            <div className="col-4">
                                {/* Stats */}
                                <div className="text-center">
                                    <span className="d-block h4 mb-1">0</span>
                                    <span className="d-block fs-6">Completed</span>
                                </div>
                                {/* End Stats */}
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Row */}
                        {/* Progress */}
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        {/* End Progress */}
                    </div>
                </div>
            </div>
            {/* End Card */}
        </>
    );
}
