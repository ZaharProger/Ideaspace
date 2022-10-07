import React from 'react';

const NavBarListItem = (props) => {
    //console.log('navbar-list-item');
    return (
        <div className="Navbar-list-item d-flex flex-column">
            <i className={ `fa-regular ${props.item_params.icon_type}` }></i>
            <span className="mt-2">{props.item_params.caption}</span>
        </div>
    )
}

export default NavBarListItem;