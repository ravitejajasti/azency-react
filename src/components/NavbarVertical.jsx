import React from 'react';

const NavbarVertical = () => {
  return (
    <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white">
      <div className="navbar-vertical-container">
        <div className="navbar-vertical-footer-offset">
          <a className="navbar-brand" href="../index.html" aria-label="Front">
            <img className="navbar-brand-logo" src="../assets/svg/logos/logo.svg" alt="Logo" data-hs-theme-appearance="default" />
            <img className="navbar-brand-logo" src="../assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark" />
            <img className="navbar-brand-logo-mini" src="../assets/svg/logos/logo-short.svg" alt="Logo" data-hs-theme-appearance="default" />
            <img className="navbar-brand-logo-mini" src="../assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark" />
          </a>
          <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
            <i className="bi-arrow-bar-left navbar-toggler-short-align" title="Collapse"></i>
            <i className="bi-arrow-bar-right navbar-toggler-full-align" title="Expand"></i>
          </button>
          <div className="navbar-vertical-content">
            <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
              {/* Add your nav items here */}
            </div>
          </div>
          <div className="navbar-vertical-footer">
            <ul className="navbar-vertical-footer-list">
              <li className="navbar-vertical-footer-list-item">
                <div className="dropdown dropup">
                  <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="selectThemeDropdown" data-bs-toggle="dropdown">
                    {/* Add theme icon */}
                  </button>
                  <div className="dropdown-menu navbar-dropdown-menu" aria-labelledby="selectThemeDropdown">
                    <a className="dropdown-item" href="#" data-icon="bi-moon-stars" data-value="auto">
                      <i className="bi-moon-stars me-2"></i>Auto (system default)
                    </a>
                    <a className="dropdown-item" href="#" data-icon="bi-brightness-high" data-value="default">
                      <i className="bi-brightness-high me-2"></i>Default (light mode)
                    </a>
                    <a className="dropdown-item active" href="#" data-icon="bi-moon" data-value="dark">
                      <i className="bi-moon me-2"></i>Dark
                    </a>
                  </div>
                </div>
              </li>
              <li className="navbar-vertical-footer-list-item">
                <div className="dropdown dropup">
                  <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="otherLinksDropdown" data-bs-toggle="dropdown">
                    <i className="bi-info-circle"></i>
                  </button>
                  <div className="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="otherLinksDropdown">
                    <span className="dropdown-header">Help</span>
                    <a className="dropdown-item" href="#">
                      <i className="bi-journals dropdown-item-icon"></i> Resources & tutorials
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="bi-command dropdown-item-icon"></i> Keyboard shortcuts
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="bi-alt dropdown-item-icon"></i> Connect other apps
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="bi-gift dropdown-item-icon"></i> What's new?
                    </a>
                    <div className="dropdown-divider"></div>
                    <span className="dropdown-header">Contacts</span>
                    <a className="dropdown-item" href="#">
                      <i className="bi-chat-left-dots dropdown-item-icon"></i> Contact support
                    </a>
                  </div>
                </div>
              </li>
              <li className="navbar-vertical-footer-list-item">
                <div className="dropdown dropup">
                  <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="selectLanguageDropdown" data-bs-toggle="dropdown">
                    <img className="avatar avatar-xss avatar-circle" src="../assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="United States Flag" />
                  </button>
                  <div className="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="selectLanguageDropdown">
                    <span className="dropdown-header">Select language</span>
                    <a className="dropdown-item" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Flag" /> English (US)
                    </a>
                    <a className="dropdown-item" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Flag" /> English (UK)
                    </a>
                    <a className="dropdown-item" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Flag" /> Deutsch
                    </a>
                    <a className="dropdown-item" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Flag" /> Dansk
                    </a>
                    <a className="dropdown-item" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Flag" /> Italiano
                    </a>
                    <a className="dropdown-item" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Flag" /> 中文 (繁體)
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NavbarVertical;
