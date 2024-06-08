import React from 'react'

function SearchLight() {
    return (
        <div className="dropdown ms-2">
  {/* Input Group */}
  <div className="d-none d-lg-block">
    <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
      <div className="input-group-prepend input-group-text">
        <i className="bi-search" />
      </div>
      <input
        type="search"
        className="js-form-search form-control"
        placeholder="Search in front"
        aria-label="Search in front"
        data-hs-form-search-options='{
       "clearIcon": "#clearSearchResultsIcon",
       "dropMenuElement": "#searchDropdownMenu",
       "dropMenuOffset": 20,
       "toggleIconOnFocus": true,
       "activeClass": "focus"
     }'
      />
      <a className="input-group-append input-group-text" href="javascript:;">
        <i
          id="clearSearchResultsIcon"
          className="bi-x-lg"
          style={{ display: "none" }}
        />
      </a>
    </div>
  </div>
  <button
    className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none"
    type="button"
    data-hs-form-search-options='{
       "clearIcon": "#clearSearchResultsIcon",
       "dropMenuElement": "#searchDropdownMenu",
       "dropMenuOffset": 20,
       "toggleIconOnFocus": true,
       "activeClass": "focus"
     }'
  >
    <i className="bi-search" />
  </button>
  {/* End Input Group */}
  {/* Card Search Content */}
  <div
    id="searchDropdownMenu"
    className="hs-form-search-menu-content dropdown-menu dropdown-menu-form-search navbar-dropdown-menu-borderless"
  >
    <div className="card">
      {/* Body */}
      <div className="card-body-height">
        <div className="d-lg-none">
          <div className="input-group input-group-merge navbar-input-group mb-5">
            <div className="input-group-prepend input-group-text">
              <i className="bi-search" />
            </div>
            <input
              type="search"
              className="form-control"
              placeholder="Search in front"
              aria-label="Search in front"
            />
            <a
              className="input-group-append input-group-text"
              href="javascript:;"
            >
              <i className="bi-x-lg" />
            </a>
          </div>
        </div>
        <span className="dropdown-header">Recent searches</span>
        <div className="dropdown-item bg-transparent text-wrap">
          <a
            className="btn btn-soft-dark btn-xs rounded-pill"
            href="@@autopath/index.html"
          >
            Gulp <i className="bi-search ms-1" />
          </a>
          <a
            className="btn btn-soft-dark btn-xs rounded-pill"
            href="@@autopath/index.html"
          >
            Notification panel <i className="bi-search ms-1" />
          </a>
        </div>
        <div className="dropdown-divider" />
        <span className="dropdown-header">Tutorials</span>
        <a className="dropdown-item" href="@@autopath/index.html">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <span className="icon icon-soft-dark icon-xs icon-circle">
                <i className="bi-sliders" />
              </span>
            </div>
            <div className="flex-grow-1 text-truncate ms-2">
              <span>How to set up Gulp?</span>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="@@autopath/index.html">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <span className="icon icon-soft-dark icon-xs icon-circle">
                <i className="bi-paint-bucket" />
              </span>
            </div>
            <div className="flex-grow-1 text-truncate ms-2">
              <span>How to change theme color?</span>
            </div>
          </div>
        </a>
        <div className="dropdown-divider" />
        <span className="dropdown-header">Members</span>
        <a className="dropdown-item" href="@@autopath/index.html">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                className="avatar avatar-xs avatar-circle"
                src="@@autopath/assets/img/160x160/img10.jpg"
                alt="Image Description"
              />
            </div>
            <div className="flex-grow-1 text-truncate ms-2">
              <span>
                Amanda Harvey{" "}
                <i
                  className="tio-verified text-primary"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Top endorsed"
                />
              </span>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="@@autopath/index.html">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                className="avatar avatar-xs avatar-circle"
                src="@@autopath/assets/img/160x160/img3.jpg"
                alt="Image Description"
              />
            </div>
            <div className="flex-grow-1 text-truncate ms-2">
              <span>David Harrison</span>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="@@autopath/index.html">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <div className="avatar avatar-xs avatar-soft-info avatar-circle">
                <span className="avatar-initials">A</span>
              </div>
            </div>
            <div className="flex-grow-1 text-truncate ms-2">
              <span>Anne Richard</span>
            </div>
          </div>
        </a>
      </div>
      {/* End Body */}
      {/* Footer */}
      <a className="card-footer text-center" href="@@autopath/index.html">
        See all results <i className="bi-chevron-right small" />
      </a>
      {/* End Footer */}
    </div>
  </div>
  {/* End Card Search Content */}
</div>

    )
}


export default SearchLight