import React, { useContext, useEffect, useState } from 'react';

import NavBarListItem from "./NavBarListItem";
import { routes } from '../../../globalConstants';
import { navBarContext } from '../../../contexts';

const NavBarList = () => {
    //console.log('navbar-list');
    const [menuStatus, changeMenuStatus] = useState(false);

    const menuButtonStatus = useContext(navBarContext);

    const listItems = [
        <NavBarListItem key="settings" navbar_item_props={{
            icon_type: 'fa-gear',
            caption: 'Настройки',
            route_name: routes.settings
        }}/>,
        <NavBarListItem key="create" navbar_item_props={{
            icon_type: 'fa-circle-plus',
            caption: 'Создать',
            route_name: routes.create
        }}/>,
        <NavBarListItem key="liked" navbar_item_props={{
            icon_type: 'fa-heart',
            caption: 'Понравилось',
            route_name: routes.main
        }}/>,
        <NavBarListItem key="sign out" navbar_item_props={{
            icon_type: 'fa-right-from-bracket',
            caption: 'Выход',
            route_name: routes.auth
        }}/>
    ]

    useEffect(() => {
        Array.from(document.getElementById('Navbar-list').getElementsByClassName('Navbar-list-item')).forEach(listItem => {
            listItem.onmouseover = () => {
                Array.from(listItem.getElementsByTagName('i'))[0].classList.replace('fa-regular', 'fa-solid');
                listItem.style.color = '#4848ca';
            }
            listItem.onmouseleave = () => {
                Array.from(listItem.getElementsByTagName('i'))[0].classList.replace('fa-solid', 'fa-regular');
                listItem.style.color = '#787878';
            }
        })
    })

    return (
        <div id="Navbar-list" className="d-flex pb-3">
            {
                menuButtonStatus? <i id="Menu-button" className={ `fa-solid fa-bars ${menuStatus? 'mb-3' : ''}` }
                onClick={ () => changeMenuStatus(!menuStatus) }></i> : null
            }
            {
                menuStatus || !menuButtonStatus? listItems : null
            }
        </div>
    )
}

export default NavBarList;