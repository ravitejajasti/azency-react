import React, { useState, useContext, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { debounce } from 'lodash';
import Timeline from './CommentTimeline';

const TaskForm = ({ projectId, initialDetails = {}, onClose, onUpdateTask, users, sections }) => {
    const [details, setDetails] = useState(initialDetails);
    const [errors, setErrors] = useState({});
    const { authTokens } = useContext(AuthContext);

    const isNewTask = !initialDetails.id;

    const debouncedSaveChanges = useCallback(
        debounce((fieldName, updatedDetails) => {
            const url = isNewTask
                ? `http://127.0.0.1:8000/projects/${projectId}/tasks/`
                : `http://127.0.0.1:8000/projects/${projectId}/tasks/${initialDetails.id}/`;
            const method = isNewTask ? 'post' : 'put';

            axios({
                method,
                url,
                data: updatedDetails,
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('Task saved successfully:', response.data);
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [fieldName]: null
                }));
                onUpdateTask(response.data); // Notify parent of the update
            })
            .catch(error => {
                console.error('Error saving task:', error.response.data);
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [fieldName]: 'Failed to save field. Please try again.'
                }));
            });
        }, 500), [projectId, authTokens.access, isNewTask] // Add dependencies
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => {
            const updatedDetails = {
                ...prevDetails,
                [name]: value
            };
            debouncedSaveChanges(name, updatedDetails);
            return updatedDetails;
        });
    };

    return (
        <>
        <form>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control form-control-title"
                    id="taskTitle"
                    name="title"
                    placeholder="Task Title"
                    value={details.title || ''}
                    onChange={handleInputChange}
                />
                {errors.title && <div className="alert alert-danger">{errors.title}</div>}
            </div>
            <div className="row mb-3">
                <label htmlFor="taskStatus" className="col-sm-3 col-form-label">Status</label>
                <div className="col-sm-9">
                    <select
                        className="form-control form-control-borderless"
                        id="taskStatus"
                        name="status"
                        value={details.status || 'Incomplete'}
                        onChange={handleInputChange}
                    >
                        <option value="Incomplete">Incomplete</option>
                        <option value="Complete">Complete</option>
                    </select>
                    {errors.status && <div className="alert alert-danger">{errors.status}</div>}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="taskSection" className="col-sm-3 col-form-label">Section</label>
                <div className="col-sm-9">
                    <select
                        className="form-control form-control-borderless"
                        id="taskSection"
                        name="section"
                        value={details.section || 'TODO'}
                        onChange={handleInputChange}
                    >
                        {sections.map((section) => (
                            <option value={section.id}>{section.name}</option>
                        ))}
                    </select>
                    {errors.section && <div className="alert alert-danger">{errors.section}</div>}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="taskDueDate" className="col-sm-3 col-form-label">Due Date</label>
                <div className="col-sm-9">
                    <input
                        type="date"
                        className="form-control form-control-borderless"
                        id="taskDueDate"
                        name="due_date"
                        placeholder="YYYY-MM-DD"
                        value={details.due_date || ''}
                        onChange={handleInputChange}
                    />
                    {errors.due_date && <div className="alert alert-danger">{errors.due_date}</div>}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="taskAssignedTo" className="col-sm-3 col-form-label">Assigned To</label>
                <div className="col-sm-9">
                    <select
                        className="form-control form-control-borderless"
                        id="taskAssignedTo"
                        name="assigned_to"
                        value={details.assigned_to || ''}
                        onChange={handleInputChange}
                    >
                        {users.map((user) => (
                            <option value={user.id}>{user.username}</option>
                        ))}
                    </select>
                    {errors.assigned_to && <div className="alert alert-danger">{errors.assigned_to}</div>}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="taskDescription" className="form-label">Description</label>
                <textarea
                    className="form-control input-group-borderless"
                    id="taskDescription"
                    name="description"
                    placeholder="Task Description"
                    value={details.description || ''}
                    onChange={handleInputChange}
                />
                {errors.description && <div className="alert alert-danger">{errors.description}</div>}
            </div>
        </form>
        <Timeline />
        </>
    );
};

export default TaskForm;
