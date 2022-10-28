import React from 'react';

const NavBarListItem = (props) => {
    //console.log('navbar-list-item');
    return (
        <div className="Navbar-list-item d-flex flex-column" onClick={ () => props.navbar_item_props.callback() }>
            <i className={ `fa-regular ${props.navbar_item_props.icon}` }></i>
            <span className="mt-2">{props.navbar_item_props.caption}</span>
        </div>
    )
}

export default NavBarListItem;