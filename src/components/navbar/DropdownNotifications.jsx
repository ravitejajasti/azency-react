import React from 'react'

function DropdownNotifications() {
    return (
        <div className="dropdown">
  <button
    type="button"
    className="btn btn-ghost-secondary btn-icon rounded-circle"
    id="navbarNotificationsDropdown"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    data-bs-auto-close="outside"
    data-bs-dropdown-animation=""
  >
    <i className="bi-bell" />
    <span className="btn-status btn-sm-status btn-status-danger" />
  </button>
  <div
    className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless"
    aria-labelledby="navbarNotificationsDropdown"
    style={{ width: "25rem" }}
  >
    <div className="card">
      {/* Header */}
      <div className="card-header card-header-content-between">
        <h4 className="card-title mb-0">Notifications</h4>
        {/* Unfold */}
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
            id="navbarNotificationsDropdownSettings"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi-three-dots-vertical" />
          </button>
          <div
            className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless"
            aria-labelledby="navbarNotificationsDropdownSettings"
          >
            <span className="dropdown-header">Settings</span>
            <a className="dropdown-item" href="#">
              <i className="bi-archive dropdown-item-icon" /> Archive all
            </a>
            <a className="dropdown-item" href="#">
              <i className="bi-check2-all dropdown-item-icon" /> Mark all as
              read
            </a>
            <a className="dropdown-item" href="#">
              <i className="bi-toggle-off dropdown-item-icon" /> Disable
              notifications
            </a>
            <a className="dropdown-item" href="#">
              <i className="bi-gift dropdown-item-icon" /> What's new?
            </a>
            <div className="dropdown-divider" />
            <span className="dropdown-header">Feedback</span>
            <a className="dropdown-item" href="#">
              <i className="bi-chat-left-dots dropdown-item-icon" /> Report
            </a>
          </div>
        </div>
        {/* End Unfold */}
      </div>
      {/* End Header */}
      {/* Nav */}
      <ul
        className="nav nav-tabs nav-justified"
        id="notificationTab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            href="#notificationNavOne"
            id="notificationNavOne-tab"
            data-bs-toggle="tab"
            data-bs-target="#notificationNavOne"
            role="tab"
            aria-controls="notificationNavOne"
            aria-selected="true"
          >
            Messages (3)
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#notificationNavTwo"
            id="notificationNavTwo-tab"
            data-bs-toggle="tab"
            data-bs-target="#notificationNavTwo"
            role="tab"
            aria-controls="notificationNavTwo"
            aria-selected="false"
          >
            Archived
          </a>
        </li>
      </ul>
      {/* End Nav */}
      {/* Body */}
      <div className="card-body-height">
        {/* Tab Content */}
        <div className="tab-content" id="notificationTabContent">
          <div
            className="tab-pane fade show active"
            id="notificationNavOne"
            role="tabpanel"
            aria-labelledby="notificationNavOne-tab"
          >
            {/* List Group */}
            <ul className="list-group list-group-flush navbar-card-list-group">
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck1"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <img
                        className="avatar avatar-sm avatar-circle"
                        src="@@autopath/assets/img/160x160/img3.jpg"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">Brian Warner</h5>
                    <p className="text-body fs-5">
                      changed an issue from "In Progress" to{" "}
                      <span className="badge bg-success">Review</span>
                    </p>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">2hr</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck2"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck2"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                        <span className="avatar-initials">K</span>
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">Klara Hampton</h5>
                    <p className="text-body fs-5">mentioned you in a comment</p>
                    <blockquote className="blockquote blockquote-sm">
                      Nice work, love! You really nailed it. Keep it up!
                    </blockquote>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">10hr</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck3"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck3"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <div className="avatar avatar-sm avatar-circle">
                        <img
                          className="avatar-img"
                          src="@@autopath/assets/img/160x160/img10.jpg"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">Ruby Walter</h5>
                    <p className="text-body fs-5">
                      joined the Slack group HS Team
                    </p>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">3dy</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck4"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <div className="avatar avatar-sm avatar-circle">
                        <img
                          className="avatar-img"
                          src="@@autopath/assets/svg/brands/google-icon.svg"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">from Google</h5>
                    <p className="text-body fs-5">
                      Start using forms to capture the information of prospects
                      visiting your Google website
                    </p>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">17dy</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck5"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <div className="avatar avatar-sm avatar-circle">
                        <img
                          className="avatar-img"
                          src="@@autopath/assets/img/160x160/img7.jpg"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">Sara Villar</h5>
                    <p className="text-body fs-5">
                      completed{" "}
                      <i className="bi-journal-bookmark-fill text-primary" />{" "}
                      FD-7 task
                    </p>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">2mn</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
            </ul>
            {/* End List Group */}
          </div>
          <div
            className="tab-pane fade"
            id="notificationNavTwo"
            role="tabpanel"
            aria-labelledby="notificationNavTwo-tab"
          >
            {/* List Group */}
            <ul className="list-group list-group-flush navbar-card-list-group">
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck6"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                        <span className="avatar-initials">A</span>
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">Anne Richard</h5>
                    <p className="text-body fs-5">
                      accepted your invitation to join Notion
                    </p>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">1dy</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck7"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck7"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <div className="avatar avatar-sm avatar-circle">
                        <img
                          className="avatar-img"
                          src="@@autopath/assets/img/160x160/img5.jpg"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">Finch Hoot</h5>
                    <p className="text-body fs-5">
                      left Slack group HS projects
                    </p>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">1dy</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck8"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck8"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <div className="avatar avatar-sm avatar-dark avatar-circle">
                        <span className="avatar-initials">HS</span>
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">Htmlstream</h5>
                    <p className="text-body fs-5">
                      you earned a "Top endorsed"{" "}
                      <i className="bi-patch-check-fill text-primary" /> badge
                    </p>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">6dy</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck9"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck9"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <div className="avatar avatar-sm avatar-circle">
                        <img
                          className="avatar-img"
                          src="@@autopath/assets/img/160x160/img8.jpg"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">Linda Bates</h5>
                    <p className="text-body fs-5">Accepted your connection</p>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">17dy</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="list-group-item form-check-select">
                <div className="row">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="notificationCheck10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationCheck10"
                        />
                        <span className="form-check-stretched-bg" />
                      </div>
                      <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                        <span className="avatar-initials">L</span>
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col ms-n2">
                    <h5 className="mb-1">Lewis Clarke</h5>
                    <p className="text-body fs-5">
                      completed{" "}
                      <i className="bi-journal-bookmark-fill text-primary" />{" "}
                      FD-134 task
                    </p>
                  </div>
                  {/* End Col */}
                  <small className="col-auto text-muted text-cap">2mts</small>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="stretched-link" href="#" />
              </li>
              {/* End Item */}
            </ul>
            {/* End List Group */}
          </div>
        </div>
        {/* End Tab Content */}
      </div>
      {/* End Body */}
      {/* Card Footer */}
      <a className="card-footer text-center" href="#">
        View all notifications <i className="bi-chevron-right" />
      </a>
      {/* End Card Footer */}
    </div>
  </div>
</div>

    )
}

export default DropdownNotifications