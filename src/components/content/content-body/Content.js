import React from 'react';

import Profile from './profile/Profile';
import Wall from './Wall';
import NavBarSearch from '../navbar/NavBarSearch';
import '../../../styles/content.css';

const Content = (props) => {
    return (
        <div id="Content" className="d-flex">
            {
                props.navbar_search_status? <NavBarSearch /> : null
            }
            <Profile />
            <Wall />
        </div>
    )
}

export default Content;