import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { paneTemplates, reduxKeys } from '../../../globalConstants';
import { navBarContext } from '../../../contexts';
import useButtonsPane from '../../../hooks/useButtonsPane';
import useRedux from '../../../hooks/useRedux';

const NavBarList = () => {
    //console.log('navbar-list');
    const location = useLocation();
    const menuStatus = useSelector(state => state.menu_status);
    const menuStatusCallback = useRedux(reduxKeys.menu_status);
    
    const menuButtonStatus = useContext(navBarContext);
    const listItems = useButtonsPane(paneTemplates.navigation);

    useEffect(() => {
        Array.from(document.getElementById('Navbar-list').getElementsByClassName('Navbar-list-item')).forEach(listItem => {
            const isLocationSame = location.pathname == listItem.id;

            isLocationSame? listItem.classList.add('pressed') : listItem.classList.remove('pressed');
            listItem.querySelector('i').classList.replace(isLocationSame? 'fa-regular' : 'fa-solid', isLocationSame? 'fa-solid' : 'fa-regular');
            listItem.style.color = isLocationSame? '#4848ca' : '#787878';

            listItem.onmouseover = () => {
                if (!listItem.classList.contains('pressed')){
                    listItem.querySelector('i').classList.replace('fa-regular', 'fa-solid');
                    listItem.style.color = '#4848ca';
                }
            }
            listItem.onmouseleave = () => {
                if (!listItem.classList.contains('pressed')){
                    listItem.querySelector('i').classList.replace('fa-solid', 'fa-regular');
                    listItem.style.color = '#787878';
                }
            }           
        })
    })

    return (
        <div id="Navbar-list" className="d-flex pb-3">
            {
                menuButtonStatus? <i id="Menu-button" className={ `fa-solid fa-bars ${menuStatus? 'mb-3' : ''}` }
                onClick={ () => menuStatusCallback(!menuStatus) }></i> : null
            }
            {
                menuStatus || !menuButtonStatus? listItems : null
            }
        </div>
    )
}

export default NavBarList;