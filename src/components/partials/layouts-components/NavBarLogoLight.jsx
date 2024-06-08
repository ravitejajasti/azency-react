import React from 'react';

const NavbarLogoLight = ({ autopath }) => {
  return (
    <a className="navbar-brand" href={`${autopath}/index.html`} aria-label="Front">
      <img className="navbar-brand-logo" src={`${autopath}/assets/svg/logos/logo-white.svg`} alt="Logo" />
      <img className="navbar-brand-logo-mini" src={`${autopath}/assets/svg/logos/logo-short-white.svg`} alt="Logo" />
    </a>
  );
};

NavbarLogoLight.defaultProps = {
    autopath: 'src', // Set your default path here
  };

export default NavbarLogoLight;
