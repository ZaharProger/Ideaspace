import React from 'react';

import NavBarList from './NavBarList';
import NavBarIcon from './NavBarIcon';
import '../../../styles/navbar.css';

const NavBar = (props) => {
    return (
        <div id="Navbar" className="d-flex flex-row w-100">
            <NavBarIcon />
            <NavBarList menu_button_status={ props.menu_button_status } />
        </div>
    )
}

export default NavBar;