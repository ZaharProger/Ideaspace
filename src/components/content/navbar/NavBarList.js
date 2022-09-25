import React, { useEffect, useState } from "react";

import NavBarListItem from "./NavBarListItem";

const NavBarList = () => {
    const [menuButtonStatus, changeMenuButtonStatus] = useState(false);
    const [menuStatus, changeMenuStatus] = useState(false);

    const listItems = [
        <NavBarListItem key="favourite" item_params={{
            icon_type: 'fa-star',
            caption: 'Избранное',
        }}/>,
        <NavBarListItem key="liked" item_params={{
            icon_type: 'fa-heart',
            caption: 'Понравилось',
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

        window.onresize = () => changeMenuButtonStatus(window.innerWidth <= 1000);
        window.onresize();
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