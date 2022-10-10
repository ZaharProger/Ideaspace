import React, { useEffect, useState } from 'react';

import NavBar from './navbar/NavBar';
import Content from './content-body/Content';
import { navBarContext } from '../../contexts';

const ContentWrap = (props) => {
    //console.log('content-wrap);

    const [menuButtonStatus, changeMenuButtonStatus] = useState(false);
    const [navBarSearchStatus, changeNavBarSearchStatus] = useState(false);

    useEffect(() => {
        window.onresize = () => {
            const isMediaActive = window.innerWidth <= 1100;

            changeMenuButtonStatus(isMediaActive);
            changeNavBarSearchStatus(isMediaActive);
        }
        window.onresize();
    })
    return (
        <div id="Content-wrap" className={`d-flex flex-column${props.show_profile? '' : ' ms-auto me-auto'}`}>
            <navBarContext.Provider value={ menuButtonStatus }>
                <NavBar />
            </navBarContext.Provider>
            <Content content_props={ {
                navbar_search_status: navBarSearchStatus,
                show_profile: props.show_profile
            } } />
        </div>
    )
}

export default ContentWrap;