import React from 'react';

import useRedirect from '../../../hooks/useRedirect';

const NavBarListItem = (props) => {
    const redirect = useRedirect(props.navbar_item_props.item_type);
    //console.log('navbar-list-item');
    return (
        <div className="Navbar-list-item d-flex flex-column" onClick={ () => redirect() }>
            <i className={ `fa-regular ${props.navbar_item_props.icon_type}` }></i>
            <span className="mt-2">{props.navbar_item_props.caption}</span>
        </div>
    )
}

export default NavBarListItem;