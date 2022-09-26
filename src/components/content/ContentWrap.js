import React, { useEffect, useState } from 'react';

import NavBar from './navbar/NavBar';
import Content from './content-body/Content';
import Footer from './footer/Footer';

const ContentWrap = () => {
    const [menuButtonStatus, changeMenuButtonStatus] = useState(false);
    const [navBarSearchStatus, changeNavBarSearchStatus] = useState(false);

    useEffect(() => {
        window.onresize = () => {
            const isMediaActive = window.innerWidth <= 1000;

            changeMenuButtonStatus(isMediaActive);
            changeNavBarSearchStatus(isMediaActive);
        }
        window.onresize();
    })
    return (
        <div id="Content-wrap" className="d-flex flex-column ms-auto me-auto">
            <NavBar menu_button_status={ menuButtonStatus } />
            <Content navbar_search_status={ navBarSearchStatus } />
            <Footer />
        </div>
    )
}

export default ContentWrap;