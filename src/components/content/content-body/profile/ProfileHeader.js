import React from 'react';

import userIconProfile from '../../../../pics/user-icon.svg';

const ProfileHeader = () => {
    //console.log('profile-header');
    return(
        <div id="Profile-header" className="d-flex flex-column mb-4" >
            <img src={ userIconProfile } alt="user-icon" className="m-auto" />
            <p>Логин пользователя</p>
        </div>
    )
}

export default ProfileHeader;