import React from 'react';

import appLogo from '../../../pics/app-logo-white.svg';
import NavBarSearch from './NavBarSearch';

const NavBarIcon = () => {
    return (
        <div id="Navbar-icon" className="d-flex flex-grow-1">
            <object type="image/svg+xml" data={ appLogo } aria-label="app-logo" className="mb-3"></object>
            <NavBarSearch />
        </div>
    )
}

export default NavBarIcon;