import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Projects() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:8000/projects/', {
                headers: {
                    Authorization: `Bearer ${authTokens?.access}`
                }
            });
            setProjects(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchProjects();
}, [authTokens]);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
    return (
        <div className="content container-fluid">
  {/* Page Header */}
  <div className="page-header">
    <div className="row align-items-end">
      <div className="col-sm mb-2 mb-sm-0">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-no-gutter">
            <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
            <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Projects</a></li>
            <li className="breadcrumb-item active" aria-current="page">Overview</li>
          </ol>
        </nav>
        <h1 className="page-header-title">Overview</h1>
      </div>
      {/* End Col */}
      <div className="col-sm-auto">
        <a className="btn btn-primary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#newProjectModal">
          <i className="bi-plus me-1" /> New project
        </a>
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
    {/* Nav */}
    <ul className="nav nav-tabs page-header-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="./projects.html">
          Projects <span className="badge bg-soft-dark text-dark ms-1">24</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./projects-timeline.html">
          Timeline
        </a>
      </li>
    </ul>
    {/* End Nav */}
  </div>
  {/* End Page Header */}
  {/* Card */}
  <div className="card mb-3 mb-lg-5">
    {/* Body */}
    <div className="card-body">
      <div className="d-flex align-items-md-center">
        <div className="flex-shrink-0">
          <span className="display-3 text-dark">24</span>
        </div>
        <div className="flex-grow-1 ms-3">
          <div className="row mx-md-n3">
            <div className="col-md px-md-4">
              <span className="d-block">Total projects</span>
              <span className="badge bg-soft-danger text-danger rounded-pill p-1">
                <i className="bi-graph-down" /> -2 late in due
              </span>
            </div>
            {/* End Col */}
            <div className="col-md-9 col-lg-10 column-md-divider px-md-4">
              <div className="row justify-content-start mb-2">
                <div className="col-auto">
                  <span className="legend-indicator bg-primary" />
                  In progress (10)
                </div>
                {/* End Col */}
                <div className="col-auto">
                  <span className="legend-indicator bg-success" />
                  Completed (8)
                </div>
                {/* End Col */}
                <div className="col-auto">
                  <span className="legend-indicator" />
                  To do (6)
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
              {/* Progress */}
              <div className="progress rounded-pill">
                <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-success" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
              </div>
              {/* End Progress */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
    </div>
    {/* End Body */}
  </div>
  {/* End Card */}
  {/* Card */}
  <div className="card">
    {/* Header */}
    <div className="card-header card-header-content-md-between">
      <div className="mb-2 mb-md-0">
        <form>
          {/* Search */}
          <div className="input-group input-group-merge input-group-flush">
            <div className="input-group-prepend input-group-text">
              <i className="bi-search" />
            </div>
            <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
          </div>
          {/* End Search */}
        </form>
      </div>
      <div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
        {/* Datatable Info */}
        <div id="datatableCounterInfo" style={{display: 'none'}}>
          <div className="d-flex align-items-center">
            <span className="fs-5 me-3">
              <span id="datatableCounter">0</span>
              Selected
            </span>
            <a className="btn btn-outline-danger btn-sm" href="javascript:;">
              <i className="bi-trash" /> Delete
            </a>
          </div>
        </div>
        {/* End Datatable Info */}
        {/* Dropdown */}
        <div className="dropdown">
          <button type="button" className="btn btn-white btn-sm dropdown-toggle w-100" id="usersExportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi-download me-2" /> Export
          </button>
          <div className="dropdown-menu dropdown-menu-sm-end" aria-labelledby="usersExportDropdown">
            <span className="dropdown-header">Options</span>
            <a id="export-copy" className="dropdown-item" href="javascript:;">
              <img className="avatar avatar-xss avatar-4x3 me-2" src="src/assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
              Copy
            </a>
            <a id="export-print" className="dropdown-item" href="javascript:;">
              <img className="avatar avatar-xss avatar-4x3 me-2" src="src/assets/svg/illustrations/print-icon.svg" alt="Image Description" />
              Print
            </a>
            <div className="dropdown-divider" />
            <span className="dropdown-header">Download options</span>
            <a id="export-excel" className="dropdown-item" href="javascript:;">
              <img className="avatar avatar-xss avatar-4x3 me-2" src="src/assets/svg/brands/excel-icon.svg" alt="Image Description" />
              Excel
            </a>
            <a id="export-csv" className="dropdown-item" href="javascript:;">
              <img className="avatar avatar-xss avatar-4x3 me-2" src="src/assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
              .CSV
            </a>
            <a id="export-pdf" className="dropdown-item" href="javascript:;">
              <img className="avatar avatar-xss avatar-4x3 me-2" src="src/assets/svg/brands/pdf-icon.svg" alt="Image Description" />
              PDF
            </a>
          </div>
        </div>
        {/* End Dropdown */}
        {/* Dropdown */}
        <div className="dropdown">
          <button type="button" className="btn btn-white btn-sm w-100" id="usersFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi-filter me-1" /> Filter <span className="badge bg-soft-dark text-dark rounded-circle ms-1">2</span>
          </button>
          <div className="dropdown-menu dropdown-menu-sm-end dropdown-card card-dropdown-filter-centered" aria-labelledby="usersFilterDropdown" style={{minWidth: '22rem'}}>
            {/* Card */}
            <div className="card">
              <div className="card-header card-header-content-between">
                <h5 className="card-header-title">Filter users</h5>
                {/* Toggle Button */}
                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm ms-2">
                  <i className="bi-x-lg" />
                </button>
                {/* End Toggle Button */}
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-4">
                    <small className="text-cap text-body">Role</small>
                    <div className="row">
                      <div className="col">
                        {/* Check */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="usersFilterCheckAll" defaultChecked />
                          <label className="form-check-label" htmlFor="usersFilterCheckAll">
                            All
                          </label>
                        </div>
                        {/* End Check */}
                      </div>
                      {/* End Col */}
                      <div className="col">
                        {/* Check */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="usersFilterCheckEmployee" />
                          <label className="form-check-label" htmlFor="usersFilterCheckEmployee">
                            Employee
                          </label>
                        </div>
                        {/* End Check */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                  <div className="row">
                    <div className="col-sm mb-4">
                      <small className="text-cap text-body">Position</small>
                      {/* Select */}
                      <div className="tom-select-custom">
                        <select className="js-select js-datatable-filter form-select form-select-sm" data-target-column-index={2} data-hs-tom-select-options="{
                                &quot;placeholder&quot;: &quot;Any&quot;,
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;10rem&quot;
                              }">
                          <option value>Any</option>
                          <option value="Accountant">Accountant</option>
                          <option value="Co-founder">Co-founder</option>
                          <option value="Designer">Designer</option>
                          <option value="Developer">Developer</option>
                          <option value="Director">Director</option>
                        </select>
                        {/* End Select */}
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-sm mb-4">
                      <small className="text-cap text-body">Status</small>
                      {/* Select */}
                      <div className="tom-select-custom">
                        <select className="js-select js-datatable-filter form-select form-select-sm" data-target-column-index={4} data-hs-tom-select-options="{
                                &quot;placeholder&quot;: &quot;Any status&quot;,
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;10rem&quot;
                              }">
                          <option value>Any status</option>
                          <option value="Completed" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-success&quot;></span>Completed</span>">Completed</option>
                          <option value="In progress" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-warning&quot;></span>In progress</span>">In progress</option>
                          <option value="To do" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-danger&quot;></span>To do</span>">To do</option>
                        </select>
                      </div>
                      {/* End Select */}
                    </div>
                    {/* End Col */}
                    <div className="col-12 mb-4">
                      <small className="text-cap text-body">Members</small>
                      {/* Select */}
                      <div className="tom-select-custom">
                        <select className="js-select form-select" autoComplete="off" multiple data-hs-tom-select-options="{
                                &quot;singleMultiple&quot;: true,
                                &quot;hideSelected&quot;: false,
                                &quot;placeholder&quot;: &quot;Select member&quot;
                              }">
                          <option label="empty" />
                          <option value="AH" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;src/assets/img/160x160/img10.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Amanda Harvey</span></span>">Amanda Harvey</option>
                          <option value="DH" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;src/assets/img/160x160/img3.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>David Harrison</span></span>">David Harrison</option>
                          <option value="SK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;src/assets/img/160x160/img4.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Sam Kart</span></span>">Sam Kart</option>
                          <option value="FH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;src/assets/img/160x160/img5.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Finch Hoot</span></span>">Finch Hoot</option>
                          <option value="CQ" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;src/assets/img/160x160/img6.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Costa Quinn</span></span>">Costa Quinn</option>
                        </select>
                      </div>
                      {/* End Select */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <div className="d-grid">
                    <a className="btn btn-primary" href="javascript:;">Apply</a>
                  </div>
                </form>
              </div>
            </div>
            {/* End Card */}
          </div>
        </div>
        {/* End Dropdown */}
      </div>
    </div>
    {/* End Header */}
    {/* Table */}
    <div className="table-responsive datatable-custom">
      <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
             &quot;columnDefs&quot;: [{
                &quot;targets&quot;: [0, 2, 3, 6, 7],
                &quot;orderable&quot;: false
              }],
             &quot;order&quot;: [],
             &quot;info&quot;: {
               &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
             },
             &quot;search&quot;: &quot;#datatableSearch&quot;,
             &quot;entries&quot;: &quot;#datatableEntries&quot;,
             &quot;pageLength&quot;: 15,
             &quot;isResponsive&quot;: false,
             &quot;isShowPaging&quot;: false,
             &quot;pagination&quot;: &quot;datatablePagination&quot;
           }">
        <thead className="thead-light">
          <tr>
            <th className="table-column-pe-0">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                <label className="form-check-label" htmlFor="datatableCheckAll" />
              </div>
            </th>
            <th className="table-column-ps-0">Project</th>
            <th>Tasks</th>
            <th>Members</th>
            <th>Status</th>
            <th>Completion</th>
            <th><i className="bi-paperclip" /></th>
            <th><i className="bi-chat-left-dots" /></th>
            <th>Due date</th>
          </tr>
        </thead>
        <tbody>
        {projects.map(project => (
                        <tr key={project.id}>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck1" />
                                    <label className="form-check-label" htmlFor="usersDataCheck1"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <Link className="d-flex align-items-center" to={`/projects/${project.id}`}>
                                    <img className="avatar" src="src/assets/svg/brands/guideline-icon.svg" alt="Image Description" />
                                    <div className="ms-3">
                                        <span className="d-block h5 text-inherit mb-0">{project.name}</span>
                                        <span className="d-block fs-6 text-body">Updated 2 minutes ago</span>
                                    </div>
                                </Link>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    120 <a className="badge bg-soft-dark text-dark ms-1" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="tasks completed today">+2</a>
                                </div>
                            </td>
                            <td>
                                <div className="avatar-group avatar-group-xs avatar-circle">
                                    <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                        <img className="avatar-img" src="src/assets/img/160x160/img9.jpg" alt="Image Description" />
                                    </a>
                                    <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                        <img className="avatar-img" src="src/assets/img/160x160/img3.jpg" alt="Image Description" />
                                    </a>
                                    <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Antony Taylor">
                                        <span className="avatar-initials">A</span>
                                    </a>
                                    <a className="avatar avatar-soft-info" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sara Iwens">
                                        <span className="avatar-initials">S</span>
                                    </a>
                                    <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                        <img className="avatar-img" src="src/assets/img/160x160/img5.jpg" alt="Image Description" />
                                    </a>
                                </div>
                            </td>
                            <td>
                                <span className="legend-indicator"></span>In progress
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <span className="fs-6 me-2">35%</span>
                                    <div className="progress table-progress">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a className="text-body" href="./project-files.html">
                                    <i className="bi-paperclip"></i> 10
                                </a>
                            </td>
                            <td>
                                <a className="text-body" href="./project-activity.html">
                                    <i className="bi-chat-left-dots"></i> 2
                                </a>
                            </td>
                            <td>05 May</td>
                        </tr>
                    ))}
        </tbody>
      </table>
    </div>
    {/* End Table */}
    {/* Footer */}
    <div className="card-footer">
      <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
        <div className="col-sm mb-2 mb-sm-0">
          <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
            <span className="me-2">Showing:</span>
            {/* Select */}
            <div className="tom-select-custom">
              <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" data-hs-tom-select-options="{
                      &quot;searchInDropdown&quot;: false,
                      &quot;hideSearch&quot;: true
                    }">
                <option value={10}>10</option>
                <option value={15} selected>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            {/* End Select */}
            <span className="text-secondary me-2">of</span>
            {/* Pagination Quantity */}
            <span id="datatableWithPaginationInfoTotalQty" />
          </div>
        </div>
        {/* End Col */}
        <div className="col-sm-auto">
          <div className="d-flex justify-content-center justify-content-sm-end">
            {/* Pagination */}
            <nav id="datatablePagination" aria-label="Activity pagination" />
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
    {/* End Footer */}
  </div>
  {/* End Card */}
</div>


    )
};

export default Projects;