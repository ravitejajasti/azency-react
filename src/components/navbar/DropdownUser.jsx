import React from 'react'

function DropdownUser() {
    return (
        <div className="dropdown">
  <button
    type="button"
    className="btn btn-icon btn-ghost-secondary rounded-circle"
    id="navbarAppsDropdown"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    data-bs-dropdown-animation=""
  >
    <i className="bi-app-indicator" />
  </button>
  <div
    className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless"
    aria-labelledby="navbarAppsDropdown"
    style={{ width: "25rem" }}
  >
    <div className="card">
      {/* Header */}
      <div className="card-header">
        <h4 className="card-title">Web apps &amp; services</h4>
      </div>
      {/* End Header */}
      {/* Body */}
      <div className="card-body card-body-height">
        <a className="dropdown-item" href="#">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                className="avatar avatar-xs avatar-4x3"
                src="@@autopath/assets/svg/brands/atlassian-icon.svg"
                alt="Image Description"
              />
            </div>
            <div className="flex-grow-1 text-truncate ms-3">
              <h5 className="mb-0">Atlassian</h5>
              <p className="card-text text-body">
                Security and control across Cloud
              </p>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="#">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                className="avatar avatar-xs avatar-4x3"
                src="@@autopath/assets/svg/brands/slack-icon.svg"
                alt="Image Description"
              />
            </div>
            <div className="flex-grow-1 text-truncate ms-3">
              <h5 className="mb-0">
                Slack{" "}
                <span className="badge bg-primary rounded-pill text-uppercase ms-1">
                  Try
                </span>
              </h5>
              <p className="card-text text-body">
                Email collaboration software
              </p>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="#">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                className="avatar avatar-xs avatar-4x3"
                src="@@autopath/assets/svg/brands/google-webdev-icon.svg"
                alt="Image Description"
              />
            </div>
            <div className="flex-grow-1 text-truncate ms-3">
              <h5 className="mb-0">Google webdev</h5>
              <p className="card-text text-body">
                Work involved in developing a website
              </p>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="#">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                className="avatar avatar-xs avatar-4x3"
                src="@@autopath/assets/svg/brands/frontapp-icon.svg"
                alt="Image Description"
              />
            </div>
            <div className="flex-grow-1 text-truncate ms-3">
              <h5 className="mb-0">Frontapp</h5>
              <p className="card-text text-body">The inbox for teams</p>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="#">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                className="avatar avatar-xs avatar-4x3"
                src="@@autopath/assets/svg/illustrations/review-rating-shield.svg"
                alt="Image Description"
              />
            </div>
            <div className="flex-grow-1 text-truncate ms-3">
              <h5 className="mb-0">HS Support</h5>
              <p className="card-text text-body">
                Customer service and support
              </p>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="#">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <div className="avatar avatar-sm avatar-soft-dark">
                <span className="avatar-initials">
                  <i className="bi-grid" />
                </span>
              </div>
            </div>
            <div className="flex-grow-1 text-truncate ms-3">
              <h5 className="mb-0">More Front products</h5>
              <p className="card-text text-body">Check out more HS products</p>
            </div>
          </div>
        </a>
      </div>
      {/* End Body */}
      {/* Footer */}
      <a className="card-footer text-center" href="#">
        View all apps <i className="bi-chevron-right" />
      </a>
      {/* End Footer */}
    </div>
  </div>
</div>

    )
}


export default DropdownUser