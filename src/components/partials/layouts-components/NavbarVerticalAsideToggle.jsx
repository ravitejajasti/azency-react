import React from 'react';

function NavbarVerticalAsideToggle() {
    return (
        <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
        <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
        <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
        </button>
    );
};

export default NavbarVerticalAsideToggle;
