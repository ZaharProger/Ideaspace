import React from 'react'

import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import ProfileFooter from './ProfileFooter';
import { profileContext } from '../../../../contexts';
import '../../../../styles/profile.css';

const Profile = (props) => {
    //console.log('profile');
    const profileMargins = `profile-position-settings-${props.enable_settings? 'on' : 'off'}`;

    return(
        <div id="Profile" className={`d-flex flex-column col-5 p-2 ${profileMargins}`}>
            <profileContext.Provider value={ props.enable_settings } >
                <ProfileHeader />
                <ProfileContent />
                <ProfileFooter />
            </profileContext.Provider>
        </div>
    )
}

export default Profile;