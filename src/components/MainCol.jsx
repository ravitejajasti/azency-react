import React from 'react';

const MainCol = ({children}) => {
  return (
    <div className="splitted-content-fluid content-space d-flex flex-column" style={{ maxHeight: '100vh', overflowY: 'auto',  minHeight:'calc(100vh - 3.875rem)'  }}>
      {/* Toggles */}
      <div className="d-flex d-xl-none justify-content-end mt-3 me-3">
        <ul className="list-inline">
          <li className="list-inline-item">
            {/* Offcanvas Toggle */}
            <button className="navbar-toggler splitted-content-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#splittedOffcanvasContent" aria-controls="splittedOffcanvasContent">
              <span className="navbar-toggler-default">
                <i className="bi-list"></i>
              </span>
              <span className="navbar-toggler-toggled">
                <i className="bi-x"></i>
              </span>
            </button>
            {/* End Offcanvas Toggle */}
          </li>
          <li className="list-inline-item">
            {/* Navbar Vertical Toggle */}
            <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler position-static">
              <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
              <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div className="tooltip d-none d-sm-block" role="tooltip"><div className="arrow"></div><div class="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
            </button>
            {/* End Navbar Vertical Toggle */}
          </li>
        </ul>
      </div>
      {/* End Toggles */}

      <div className="mt-xl-1">
        {/* Title */}
        <div className="text-center">
          {children}
        </div>
        {/* End Title */}
      </div>
    </div>
  );
};

export default MainCol;
