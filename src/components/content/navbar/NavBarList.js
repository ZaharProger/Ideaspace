import React, { useEffect, useState } from 'react';

import NavBarListItem from "./NavBarListItem";

const NavBarList = (props) => {
    //console.log('navbar-list');
    const [menuStatus, changeMenuStatus] = useState(false);

    const listItems = [
        <NavBarListItem key="settings" item_params={{
            icon_type: 'fa-gear',
            caption: 'Настройки',
        }}/>,
        <NavBarListItem key="liked" navbar_item_props={{
            icon_type: 'fa-heart',
            caption: 'Понравилось',
        }}/>,
        <NavBarListItem key="sign out" navbar_item_props={{
            icon_type: 'fa-circle-xmark',
            caption: 'Выход',
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
                props.menu_button_status? <i id="Menu-button" className={ `fa-solid fa-bars ${menuStatus? 'mb-3' : ''}` }
                onClick={ () => changeMenuStatus(!menuStatus) }></i> : null
            }
            {
                menuStatus || !props.menu_button_status? listItems : null
            }
        </div>
    )
}

export default NavBarList;