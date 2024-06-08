import React from 'react'

function NavbarLogoLight() {
    return (
        <a className="navbar-brand" href="@@autopath/index.html" aria-label="Front">
        <img
            className="navbar-brand-logo"
            src="@@autopath/assets/svg/logos/logo-white.svg"
            alt="Logo"
        />
        <img
            className="navbar-brand-logo-mini"
            src="@@autopath/assets/svg/logos/logo-short-white.svg"
            alt="Logo"
        />
        </a>
    )
}

export default NavbarLogoLight