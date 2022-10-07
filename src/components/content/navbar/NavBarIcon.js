import React from 'react';

import appLogo from '../../../pics/app-logo-white.svg';
import NavBarSearch from './NavBarSearch';

const NavBarIcon = () => {
    //console.log('navbar-icon');
    return (
        <div id="Navbar-icon" className="d-flex flex-grow-1">
            <img src={ appLogo } alt="app-logo" className="mb-3" />
            {
                window.innerWidth > 1100? <NavBarSearch /> : null
            }
        </div>
    )
}

export default NavBarIcon;