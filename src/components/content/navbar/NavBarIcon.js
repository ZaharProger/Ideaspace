import React from 'react';
import useRedirect from '../../../hooks/useRedirect';

import appLogo from '../../../pics/app-logo-white.svg';
import NavBarSearch from './NavBarSearch';
import { navigate_buttons } from '../../../globalConstants';

const NavBarIcon = () => {
    const redirect = useRedirect(navigate_buttons.nav_items.navbar_logo);
    //console.log('navbar-icon');

    return (
        <div id="Navbar-icon" className="d-flex flex-grow-1">
            <img src={ appLogo } alt="app-logo" className="mb-3" onClick={ () => redirect() } />
            {
                window.innerWidth > 1100? <NavBarSearch /> : null
            }
        </div>
    )
}

export default NavBarIcon;