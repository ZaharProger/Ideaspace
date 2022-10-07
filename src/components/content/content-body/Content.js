import React from 'react';

import Profile from './profile/Profile';
import Wall from './Wall';
import NavBarSearch from '../navbar/NavBarSearch';
import '../../../styles/content.css';

const Content = (props) => {
    //console.log('content');
    return (
        <div id="Content" className="d-flex">
            {
                props.content_props.navbar_search_status? <NavBarSearch /> : null
            }
            <Profile enable_settings={ props.content_props.show_profile } />
            {
                props.content_props.show_profile? null : <Wall />
            }
        </div>
    )
}

export default Content;