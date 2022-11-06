import React from 'react';

import Profile from './profile/Profile';
import Wall from './Wall';
import NavBarSearch from '../navbar/NavBarSearch';
import '../../../styles/content.css';
import { layoutTypes } from '../../../globalConstants';
import { contentContext } from '../../../contexts';

const Content = (props) => {
    //console.log('content');

    let layoutBasedComponent;
    switch (props.content_props.layout_type){
        case layoutTypes.both:
            layoutBasedComponent = <>
                <Profile />
                <Wall wall_width={ props.content_props.wall_width } />
            </>;
            break;
        case layoutTypes.profile:
            layoutBasedComponent = <Profile />;
            break;
        case layoutTypes.post:
            layoutBasedComponent = <Wall wall_width={ props.content_props.wall_width } />;
            break;
    }

    return (
        <div id="Content" className="d-flex w-100">
            {
                props.content_props.navbar_search_status? <NavBarSearch /> : null
            }
            <contentContext.Provider value={ props.content_props.layout_type != layoutTypes.both }>
            {
                layoutBasedComponent
            }
            </contentContext.Provider>
        </div>
    )
}

export default Content;