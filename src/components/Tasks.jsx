import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';


export default function Tasks () {

return (
    <div>
  {/* Offcanvas Content */}
  <div className="js-offcanvas-start offcanvas offcanvas-start splitted-content-small splitted-content-bordered d-flex flex-column" tabIndex={-1} id="splittedOffcanvasContent">
    <div className="offcanvas-body">
      <div className="d-flex justify-content-center flex-column align-items-center h-100 py-10 py-xl-0">
        <img className="avatar avatar-xxl mb-3" src="../assets/svg/illustrations/oc-megaphone.svg" alt="Image Description" data-hs-theme-appearance="default" />
        <img className="avatar avatar-xxl mb-3" src="../assets/svg/illustrations-light/oc-megaphone.svg" alt="Image Description" data-hs-theme-appearance="dark" />
        <p className="card-text">No data to show</p>
        <a className="btn btn-sm btn-white" href="../index.html">Get Started</a>
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
          <button className="navbar-toggler splitted-content-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#splittedOffcanvasContent" aria-controls="splittedOffcanvasContent">
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
          <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler position-static">
            <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse" />
            <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template="<div class=&quot;tooltip d-none d-sm-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Expand" />
          </button>
          {/* End Navbar Vertical Toggle */}
        </li>
      </ul>
    </div>
    {/* End Toggles */}
    <div className="mt-xl-10">
      {/* Title */}
      <div className="text-center">
        <img className="img-fluid mb-5" src="../assets/svg/layouts/sidebar-combinations-two-cols.svg" alt="Image Description" data-hs-theme-appearance="default" style={{maxWidth: '15rem'}} />
        <img className="img-fluid shadow-sm mb-5" src="../assets/svg/layouts-light/sidebar-combinations-two-cols.svg" alt="Image Description" data-hs-theme-appearance="dark" style={{maxWidth: '15rem'}} />
        <h1>Two Columns - Sidebar Combinations</h1>
        <p>Customize your overview page layout. Choose the one that best fits your needs.</p>
        <a className="btn btn-primary" href="../layouts/index.html">Go back to Layouts</a>
      </div>
      {/* End Title */}
    </div>
  </div>
  {/* End Fluid Content */}
</div>

)
};