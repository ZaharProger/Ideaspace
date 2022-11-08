import React from 'react';
import appLogo from '../../../pics/app-logo-white.svg';
import NavBarSearch from './NavBarSearch';
import { routes } from '../../../globalConstants';
import useRedirection from '../../../hooks/useRedirection';

const NavBarIcon = () => {
    const redirect = useRedirection();
    //console.log('navbar-icon');

    return (
        <div id="Navbar-icon" className="d-flex flex-grow-1">
            <img src={ appLogo } alt="app-logo" className="mb-3" onClick={ () => redirect(routes.main) } />
            {
                window.innerWidth > 1100? <NavBarSearch /> : null
            }
        </div>
    )
}

export default NavBarIcon;