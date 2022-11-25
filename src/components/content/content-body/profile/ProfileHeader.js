import React, { useContext } from 'react';

import { profileContext } from '../../../../contexts';
import userIconProfile from '../../../../pics/user-icon.svg';

const ProfileHeader = () => {
    const userLogin = useContext(profileContext).user_data.userLogin;
    //console.log('profile-header');
    return(
        <div id="Profile-header" className="d-flex flex-column mb-4" >
            <img src={ userIconProfile } alt="user-icon" className="m-auto" />
            <p className="mt-2">{ userLogin }</p>
        </div>
    )
}

export default ProfileHeader;