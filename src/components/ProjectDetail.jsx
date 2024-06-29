import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import TaskCard from './TaskCard';
import { useParams } from 'react-router-dom';
import TaskListView from './TaskListView';
import TaskGridView from './TaskGridView';
import TeamMembers from './TeamMembers';

export default function ProjectDetail () {
  const [tasks, setTasks] = useState([]);
  const [sections, setSections] = useState([]);
  const [users, setUsers] = useState([]);
  const { projectId } = useParams();
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
      // Function to fetch project data from API
      const fetchProjectData = async () => {
          try {
              const response = await axios.get(`http://localhost:8000/projects/${projectId}/detail`, {
                headers: {
                    Authorization: `Bearer ${authTokens?.access}`
                }
            }); // Adjust the API endpoint as necessary
            console.log('API Response Data:', response.data);

            if (response.data) {
                setSections(response.data.sections);
                setUsers(response.data.members);

                // Extract tasks from sections
                const allTasks = response.data.sections.flatMap(section => section.tasks);
                setTasks(allTasks);
            } else {
                console.error('Unexpected response structure:', response);
            }
        } catch (error) {
            console.error('Error fetching project data:', error);
        }
    };

    fetchProjectData();
}, [projectId, authTokens]);

const handleUpdateTask = (updatedTask) => {
    // Update the tasks state
    setTasks((prevTasks) => 
        prevTasks.map((task) => 
            task.id === updatedTask.id ? updatedTask : task
        )
    );

    // Update the sections state
    setSections((prevSections) => {
        let newSections = prevSections.map((section) => {
            // Remove the task from its current section
            return {
                ...section,
                tasks: section.tasks.filter((task) => task.id !== updatedTask.id)
            };
        });

        // Find the section to which the updated task belongs
        const targetSectionIndex = newSections.findIndex(
            (section) => section.id === updatedTask.section
        );

        // Add the updated task to the correct section
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
            
            // Update tasks state
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
            
            // Update sections state
            setSections((prevSections) => prevSections.map((section) => ({
                ...section,
                tasks: section.tasks.filter((task) => task.id !== taskId)
            })));

        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

  return (
      <div>
          {/* Content */}
          <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                  <div className="row align-items-end">
                      <div className="col-sm mb-2 mb-sm-0">
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb breadcrumb-no-gutter">
                                  <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Apps</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">Kanban</li>
                              </ol>
                          </nav>
                          <h1 className="page-header-title">Kanban</h1>
                      </div>
                      {/* End Col */}
                      <TeamMembers />
                      {/* End Col */}
                  </div>
              </div>
              {/* End Page Header */}
          </div>
          {/* End Content */}
          {/* Content */}
          <div className="content container-fluid my-n9">
              <div className="row mb-5">
                  <div className="col-12 col-sm-auto mb-3">
                      {/* Input Group */}
                      <div className="input-group input-group-merge">
                          <div className="input-group-prepend input-group-text">
                              <i className="bi-search" />
                          </div>
                          <input type="search" className="form-control" placeholder="Search projects" aria-label="Search projects" />
                      </div>
                      {/* End Input Group */}
                  </div>
                  {/* End Col */}
                  <div className="col-auto mb-3">
                      {/* Daterangepicker */}
                      <button id="js-daterangepicker-predefined" className="btn btn-ghost-secondary dropdown-toggle">
                          <i className="bi-calendar-week" />
                          <span className="js-daterangepicker-predefined-preview ms-2" />
                      </button>
                      {/* End Daterangepicker */}
                  </div>
                  {/* End Col */}
                  <div className="col-auto mb-3 ms-auto">
                      {/* Nav */}
                      <ul className="nav nav-segment" id="connectionsTab" role="tablist">
                          <li className="nav-item">
                              <a className="nav-link active" id="grid-tab" data-bs-toggle="tab" href="#grid" role="tab" aria-controls="grid" aria-selected="true" title="Column view">
                                  <i className="bi-grid" />
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" id="list-tab" data-bs-toggle="tab" href="#list" role="tab" aria-controls="list" aria-selected="false" title="List view">
                                  <i className="bi-view-list" />
                              </a>
                          </li>
                      </ul>
                      {/* End Nav */}
                  </div>
                  {/* End Col */}
              </div>
              {/* End Row */}
          </div>
          {/* End Content */}
          {/* Tab Content */}
          <div className="tab-content" id="connectionsTabContent">
              <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                  {/* Content */}
                  <TaskGridView projectId={projectId} sections={sections} users={users} tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
                  {/* End Content */}
              </div>
              <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                  {/* Content */}
                    <TaskListView projectId={projectId} sections={sections} users={users} tasks={tasks} onUpdateTask={handleUpdateTask} />
                  {/* End Content */}
              </div>
          </div>
          {/* End Tab Content */}
      </div>
  )
}
