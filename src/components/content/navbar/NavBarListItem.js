import React from 'react';
import { reduxKeys } from '../../../globalConstants';
import useRedux from '../../../hooks/useRedux';

const NavBarListItem = (props) => {
    //console.log('navbar-list-item');
    const menuStatusCallback = useRedux(reduxKeys.menu_status);

    return (
        <div className="Navbar-list-item d-flex flex-column" onClick={ () => {
            menuStatusCallback(false);
            props.navbar_item_props.callback();
        } }>
            <i className={ `fa-regular ${props.navbar_item_props.icon}` }></i>
            <span className="mt-2">{props.navbar_item_props.caption}</span>
        </div>
    )
}

export default NavBarListItem;