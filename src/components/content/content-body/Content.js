import React from 'react';

import Profile from './profile/Profile';
import Wall from './Wall';
import NavBarSearch from '../navbar/NavBarSearch';
import '../../../styles/content.css';

const Content = (props) => {
    //console.log('content');

    return (
        <div id="Content" className="d-flex w-100">
            {
                props.content_props.navbar_search_status? <NavBarSearch /> : null
            }
            <Profile enable_settings={ props.content_props.show_profile } />
            {
                props.content_props.show_profile? null : <Wall wall_width={ props.content_props.wall_width } />
            }
        </div>
    )
}

export default Content;