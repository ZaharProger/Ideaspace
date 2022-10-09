import React from 'react';
import { useNavigate } from 'react-router-dom';

import appLogo from '../../../pics/app-logo-white.svg';
import NavBarSearch from './NavBarSearch';
import { routes } from '../../../globalConstants';

const NavBarIcon = () => {
    const navigate = useNavigate();
    //console.log('navbar-icon');

    return (
        <div id="Navbar-icon" className="d-flex flex-grow-1">
            <img src={ appLogo } alt="app-logo" className="mb-3" onClick={ () => navigate(routes.main) } />
            {
                window.innerWidth > 1100? <NavBarSearch /> : null
            }
        </div>
    )
}

export default NavBarIcon;