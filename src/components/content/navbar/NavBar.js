import React from 'react';

import NavBarList from './NavBarList';
import NavBarIcon from './NavBarIcon';
import '../../../styles/navbar.css';

const NavBar = () => {
    return (
        <div id="Navbar" className="d-flex flex-row w-100">
            <NavBarIcon />
            <NavBarList />
        </div>
    )
}

export default NavBar;