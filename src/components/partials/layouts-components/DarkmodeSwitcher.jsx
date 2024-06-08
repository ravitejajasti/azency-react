import React from 'react';

function DarkmodeSwitcher({ dropup }) {
  return (
<div className="dropdown dropup">
  <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="selectThemeDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
    
  </button>

  <div className="dropdown-menu navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="selectThemeDropdown">
    <a className="dropdown-item" href="#" data-icon="bi-moon-stars" data-value="auto">
      <i className="bi-moon-stars me-2"></i>
      <span className="text-truncate" title="Auto (system default)">Auto (system default)</span>
    </a>
    <a className="dropdown-item" href="#" data-icon="bi-brightness-high" data-value="default">
      <i className="bi-brightness-high me-2"></i>
      <span className="text-truncate" title="Default (light mode)">Default (light mode)</span>
    </a>
    <a className="dropdown-item active" href="#" data-icon="bi-moon" data-value="dark">
      <i className="bi-moon me-2"></i>
      <span className="text-truncate" title="Dark">Dark</span>
    </a>
  </div>
</div>
  )
}

export default DarkmodeSwitcher;
