import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBarListItem = (props) => {
    const navigate = useNavigate();
    //console.log('navbar-list-item');
    return (
        <div className="Navbar-list-item d-flex flex-column" onClick={ () => navigate(props.navbar_item_props.route) }>
            <i className={ `fa-regular ${props.navbar_item_props.icon}` }></i>
            <span className="mt-2">{props.navbar_item_props.caption}</span>
        </div>
    )
}

export default NavBarListItem;