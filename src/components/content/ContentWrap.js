import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import NavBar from './navbar/NavBar';
import Content from './content-body/Content';
import { navBarContext } from '../../contexts';

const ContentWrap = () => {
    //console.log('content-wrap');
    const contentWrapContext = useOutletContext();
    const [menuButtonStatus, changeMenuButtonStatus] = useState(window.innerWidth <= 1100);
    const [wallWidth, changeWallWidth] = useState('col-7');
    const [searchResultsWidth, changeSearchResultsWidth] = useState('col-5');
    
    window.onresize = () => {
        const isMediaActive = window.innerWidth <= 1100;

        changeMenuButtonStatus(isMediaActive);
        changeWallWidth(isMediaActive? '' : 'col-7');
        changeSearchResultsWidth(isMediaActive? '' : 'col-5');
    }

    return (
        <div id="Content-wrap" className='d-flex flex-column'>
            <navBarContext.Provider value={ menuButtonStatus }>
                <NavBar />
            </navBarContext.Provider>
            <Content content_props={ {
                layout_type: contentWrapContext.layout_type,
                wall_width: wallWidth,
                search_results_width: searchResultsWidth,
                another_profile: contentWrapContext.another_profile
            } } />
        </div>
    )
}

export default ContentWrap;