import React from 'react';

function DropdownHelp() {
  return (
    <div className="dropdown dropup">
  <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="otherLinksDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
    <i className="bi-info-circle"></i>
  </button>

  <div className="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="otherLinksDropdown">
    <span className="dropdown-header">Help</span>
    <a className="dropdown-item" href="#">
      <i className="bi-journals dropdown-item-icon"></i>
      <span className="text-truncate" title="Resources &amp; tutorials">Resources &amp; tutorials</span>
    </a>
    <a className="dropdown-item" href="#">
      <i className="bi-command dropdown-item-icon"></i>
      <span className="text-truncate" title="Keyboard shortcuts">Keyboard shortcuts</span>
    </a>
    <a className="dropdown-item" href="#">
      <i className="bi-alt dropdown-item-icon"></i>
      <span className="text-truncate" title="Connect other apps">Connect other apps</span>
    </a>
    <a className="dropdown-item" href="#">
      <i className="bi-gift dropdown-item-icon"></i>
      <span className="text-truncate" title="What's new?">What's new?</span>
    </a>
    <div className="dropdown-divider"></div>
    <span className="dropdown-header">Contacts</span>
    <a className="dropdown-item" href="#">
      <i className="bi-chat-left-dots dropdown-item-icon"></i>
      <span className="text-truncate" title="Contact support">Contact support</span>
    </a>
  </div>
</div>
  )
}

export default DropdownHelp;
