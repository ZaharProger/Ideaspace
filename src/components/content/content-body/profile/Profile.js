import React from 'react'

import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import ProfileFooter from './ProfileFooter';
import '../../../../styles/profile.css';

const Profile = (props) => {
    //console.log('profile');
    const profileMargins = `profile-position-settings-${props.enable_settings? 'on' : 'off'}`;

    return(
        <div id="Profile" className={`d-flex flex-column col-5 ${profileMargins}`}>
            <ProfileHeader enable_settings={ props.enable_settings } />
            <ProfileContent enable_settings={ props.enable_settings } />
            <ProfileFooter enable_settings={ props.enable_settings } />
        </div>
    )
}

export default Profile;