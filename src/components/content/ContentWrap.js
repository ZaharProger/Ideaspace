import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './navbar/NavBar';
import Content from './content-body/Content';
import { navBarContext } from '../../contexts';
import { layoutTypes, routes } from '../../globalConstants';

const ContentWrap = () => {
    //console.log('content-wrap');
    const location = useLocation();
    const [menuButtonStatus, changeMenuButtonStatus] = useState(window.innerWidth <= 1000);
    const [navBarSearchStatus, changeNavBarSearchStatus] = useState(window.innerWidth <= 1000);
    const [wallWidth, changeWallWidth] = useState('col-7');

    window.onresize = () => {
        const isMediaActive = window.innerWidth <= 1100;

        changeMenuButtonStatus(isMediaActive);
        changeNavBarSearchStatus(isMediaActive);
        changeWallWidth(isMediaActive? '' : 'col-7');
    }

    let layoutType;
    switch (location.pathname){
        case routes.main:
            layoutType = layoutTypes.both;
            break;
        case routes.settings:
            layoutType = layoutTypes.profile;
            break;
        case routes.create:
            layoutType = layoutTypes.post;
            break;
    }

    return (
        <div id="Content-wrap" className='d-flex flex-column'>
            <navBarContext.Provider value={ menuButtonStatus }>
                <NavBar />
            </navBarContext.Provider>
            <Content content_props={ {
                navbar_search_status: navBarSearchStatus,
                layout_type: layoutType,
                wall_width: wallWidth
            } } />
        </div>
    )
}

export default ContentWrap;