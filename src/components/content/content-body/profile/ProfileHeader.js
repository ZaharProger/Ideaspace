import React from 'react';

import userIconProfile from '../../../../pics/user-icon.svg';

const ProfileHeader = (props) => {
    //console.log('profile-header');
    return(
        <div id="Profile-header" className="d-flex flex-column p-2" >
            <img src={ userIconProfile } alt="user-icon" className="m-auto" />
            {
                props.enable_settings?
                <input type="text" autoComplete="off" placeholder="Логин" className="input-placeholder mt-3 mb-4"></input>
                :
                <p>Логин пользователя</p>
            }
        </div>
    )
}

export default ProfileHeader;