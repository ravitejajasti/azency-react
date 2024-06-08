import React from 'react';

function DropdownLanguage({ autopath='' }) {
  return (
    <div className="dropdown dropup">
      <button
        type="button"
        className="btn btn-ghost-secondary btn-icon rounded-circle"
        id="selectLanguageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-dropdown-animation
      >
        <img
          className="avatar avatar-xss avatar-circle"
          src={`${autopath}/node_modules/flag-icon-css/flags/1x1/us.svg`}
          alt="United States Flag"
        />
      </button>

      <div
        className="dropdown-menu navbar-dropdown-menu-borderless"
        aria-labelledby="selectLanguageDropdown"
      >
        <span className="dropdown-header">Select language</span>
        <a className="dropdown-item" href="#">
          <img
            className="avatar avatar-xss avatar-circle me-2"
            src={`${autopath}/node_modules/flag-icon-css/flags/1x1/us.svg`}
            alt="Flag"
          />
          <span className="text-truncate" title="English">English (US)</span>
        </a>
        <a className="dropdown-item" href="#">
          <img
            className="avatar avatar-xss avatar-circle me-2"
            src={`${autopath}/node_modules/flag-icon-css/flags/1x1/gb.svg`}
            alt="Flag"
          />
          <span className="text-truncate" title="English">English (UK)</span>
        </a>
        <a className="dropdown-item" href="#">
          <img
            className="avatar avatar-xss avatar-circle me-2"
            src={`${autopath}/node_modules/flag-icon-css/flags/1x1/de.svg`}
            alt="Flag"
          />
          <span className="text-truncate" title="Deutsch">Deutsch</span>
        </a>
        <a className="dropdown-item" href="#">
          <img
            className="avatar avatar-xss avatar-circle me-2"
            src={`${autopath}/node_modules/flag-icon-css/flags/1x1/dk.svg`}
            alt="Flag"
          />
          <span className="text-truncate" title="Dansk">Dansk</span>
        </a>
        <a className="dropdown-item" href="#">
          <img
            className="avatar avatar-xss avatar-circle me-2"
            src={`${autopath}/node_modules/flag-icon-css/flags/1x1/it.svg`}
            alt="Flag"
          />
          <span className="text-truncate" title="Italiano">Italiano</span>
        </a>
        <a className="dropdown-item" href="#">
          <img
            className="avatar avatar-xss avatar-circle me-2"
            src={`${autopath}/node_modules/flag-icon-css/flags/1x1/cn.svg`}
            alt="Flag"
          />
          <span className="text-truncate" title="中文 (繁體)">中文 (繁體)</span>
        </a>
      </div>
    </div>
  );
}

export default DropdownLanguage;
