import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './navbar/NavBar';
import Content from './content-body/Content';
import { navBarContext } from '../../contexts';
import { layoutTypes, routes } from '../../globalConstants';

const ContentWrap = () => {
    //console.log('content-wrap');
    const location = useLocation();
    const [menuButtonStatus, changeMenuButtonStatus] = useState(window.innerWidth <= 1100);
    const [wallWidth, changeWallWidth] = useState('col-7');
    const [searchResultsWidth, changeSearchResultsWidth] = useState('col-5');
    
    window.onresize = () => {
        const isMediaActive = window.innerWidth <= 1100;

        changeMenuButtonStatus(isMediaActive);
        changeWallWidth(isMediaActive? '' : 'col-7');
        changeSearchResultsWidth(isMediaActive? '' : 'col-5');
    }

    let layoutType;
    let anotherProfile = false;

    if (location.pathname.includes(routes.users_base)){
        layoutType = layoutTypes.both;
        anotherProfile = true;
    }
    else if (location.pathname == routes.main){
        layoutType = layoutTypes.both;
    }
    else if (location.pathname == routes.settings){
        layoutType = layoutTypes.profile;
    }
    else if(location.pathname == routes.create){
        layoutType = layoutTypes.post;
    }
    else if(location.pathname == routes.search){
        layoutType = layoutTypes.search;
    }

    useEffect(() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
    }), [location.pathname]);

    return (
        <div id="Content-wrap" className='d-flex flex-column'>
            <navBarContext.Provider value={ menuButtonStatus }>
                <NavBar />
            </navBarContext.Provider>
            <Content content_props={ {
                layout_type: layoutType,
                wall_width: wallWidth,
                search_results_width: searchResultsWidth,
                another_profile: anotherProfile
            } } />
        </div>
    )
}

export default ContentWrap;