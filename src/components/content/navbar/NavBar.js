import React from 'react';

import NavBarList from './NavBarList';
import NavBarIcon from './NavBarIcon';
import '../../../styles/navbar.css';

const NavBar = () => {
    //console.log('navbar');
    return (
        <div id="Navbar" className="d-flex flex-row w-100 position-fixed">
            <NavBarIcon />
            <NavBarList />
        </div>
    )
}

export default NavBar;