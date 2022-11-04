import React, { useState } from 'react';

import NavBar from './navbar/NavBar';
import Content from './content-body/Content';
import { navBarContext } from '../../contexts';

const ContentWrap = (props) => {
    //console.log('content-wrap');
    const [menuButtonStatus, changeMenuButtonStatus] = useState(window.innerWidth <= 1000);
    const [navBarSearchStatus, changeNavBarSearchStatus] = useState(window.innerWidth <= 1000);
    const [wallWidth, changeWallWidth] = useState('col-7');

    window.onresize = () => {
        const isMediaActive = window.innerWidth <= 1100;

        changeMenuButtonStatus(isMediaActive);
        changeNavBarSearchStatus(isMediaActive);
        changeWallWidth(isMediaActive? '' : 'col-7');
    }

    return (
        <div id="Content-wrap" className='d-flex flex-column'>
            <navBarContext.Provider value={ menuButtonStatus }>
                <NavBar />
            </navBarContext.Provider>
            <Content content_props={ {
                navbar_search_status: navBarSearchStatus,
                show_profile: props.show_profile,
                wall_width: wallWidth
            } } />
        </div>
    )
}

export default ContentWrap;