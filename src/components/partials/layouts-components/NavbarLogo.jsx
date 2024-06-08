import React from 'react';

function NavbarLogo({ autopath='src' }) {
  return (
    <a className="navbar-brand" href={`${autopath}/index.html`} aria-label="Front">
    <img
      className="navbar-brand-logo"
      src={`${autopath}/assets/svg/logos/logo.svg`}
      alt="Logo"
      data-hs-theme-appearance="default"
    />
    <img
      className="navbar-brand-logo"
      src={`${autopath}/assets/svg/logos-light/logo.svg`}
      alt="Logo"
      data-hs-theme-appearance="dark"
    />
    <img
      className="navbar-brand-logo-mini"
      src={`${autopath}/assets/svg/logos/logo-short.svg`}
      alt="Logo"
      data-hs-theme-appearance="default"
    />
    <img
      className="navbar-brand-logo-mini"
      src={`${autopath}/assets/svg/logos-light/logo-short.svg`}
      alt="Logo"
      data-hs-theme-appearance="dark"
    />
  </a>
  );
};



export default NavbarLogo;


