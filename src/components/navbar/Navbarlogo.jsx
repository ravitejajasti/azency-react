import React from 'react'

function NavbarLogo() {
  return (
    <a className="navbar-brand" href=".../index.html" aria-label="Front">
  <img
    className="navbar-brand-logo"
    src=".../assets/svg/logos/logo.svg"
    alt="Logo"
    data-hs-theme-appearance="default"
  />
  <img
    className="navbar-brand-logo"
    src=".../assets/svg/logos-light/logo.svg"
    alt="Logo"
    data-hs-theme-appearance="dark"
  />
  <img
    className="navbar-brand-logo-mini"
    src=".../assets/svg/logos/logo-short.svg"
    alt="Logo"
    data-hs-theme-appearance="default"
  />
  <img
    className="navbar-brand-logo-mini"
    src=".../assets/svg/logos-light/logo-short.svg"
    alt="Logo"
    data-hs-theme-appearance="dark"
  />
</a>

  )
}

export default NavbarLogo