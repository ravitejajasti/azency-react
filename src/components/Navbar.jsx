import React, { useEffect } from 'react'
import { useConfigs } from '../ConfigContext';
import NavbarLogoLight from './partials/layouts-components/NavBarLogoLight';
import NavbarLogo from './partials/layouts-components/NavbarLogo';
import NavbarVerticalAsideToggle from './partials/layouts-components/NavbarVerticalAsideToggle';
import NavbarVerticalMenu from './partials/layouts-components/NavbarVerticalMenu';
import DarkmodeSwitcher from './partials/layouts-components/DarkmodeSwitcher';
import DropdownHelp from './partials/layouts-components/DropdownHelp';
import DropdownLanguage from './partials/layouts-components/DropdownLanguage';
import { loadScript } from '../utils/scriptLoader'; // Adjust the path as necessary

function Navbar() {
  const config = useConfigs();
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Add any additional logic you want to execute on click
  };
  
    return (
        <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white  ">
        <div className="navbar-vertical-container">
          <div className="navbar-vertical-footer-offset">
          {/* Logo */}
          {/* {config.themeAppearance.layoutSkin === 'dark' ? (
        <NavbarLogoLight />
      ) : (
        <NavbarLogo />
      )} */}
      <NavbarLogo />
      {/* End Logo */}
      {/* Navbar Vertical Toggle */}
      <NavbarVerticalAsideToggle />
      {/* End Navbar Vertical Toggle */}
      {/* Content */}
      <div className="navbar-vertical-content">
        <NavbarVerticalMenu />
      </div>
      {/* End Content */}
      {/* Footer */}
      <div className="navbar-vertical-footer">
        <ul className="navbar-vertical-footer-list">
          <li className="navbar-vertical-footer-list-item">
            {/* Style Switcher */}
            <DarkmodeSwitcher />
            {/* End Style Switcher */}
          </li>
          <li className="navbar-vertical-footer-list-item">
            {/* Other Links */}
            <DropdownHelp />
            {/* End Other Links */}
          </li>
          <li className="navbar-vertical-footer-list-item">
            {/* Language */}
            <DropdownLanguage />
            {/* End Language */}
          </li>
        </ul>
      </div>
      {/* End Footer */}
    </div>
  </div>
</aside>

    )
}

export default Navbar;