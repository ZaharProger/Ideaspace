import React from 'react';
import { useSelector } from 'react-redux';

import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import ProfileFooter from './ProfileFooter';
import { profileContext } from '../../../../contexts';
import '../../../../styles/profile.css';

const Profile = (props) => {
    //console.log('profile');
    const userData = useSelector(state => state.user_data);

    const profileMargins = `profile-position-settings-${props.enable_settings? 'on' : 'off'}`;
    const contextData = {
        user_data: userData,
        enable_settings: props.enable_settings
    };    

    return(
        <div id="Profile" className={`d-flex flex-column col-5 p-2 ${profileMargins}`}>
            <profileContext.Provider value={ contextData } >
                <ProfileHeader />
                <ProfileContent />
                <ProfileFooter />
            </profileContext.Provider>
        </div>
    )
}

export default Profile;