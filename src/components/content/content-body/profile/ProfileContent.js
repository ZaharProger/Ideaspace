import React, { useContext } from 'react';

import { contentContext, profileContext } from '../../../../contexts';
import { placeholders } from '../../../../globalConstants';

const ProfileContent = () => {
    //console.log('profile-content');
    const userData = useContext(profileContext).user_data;
    const enableSettings = useContext(contentContext).enable_settings;

    return(
        <div id="Profile-content" className="d-flex mb-4">
            {
                enableSettings?
                <textarea name="UserStatus" type="text" autoComplete="off" placeholder={ placeholders.profile_content }
                className="input-placeholder w-100"></textarea>
                :
                <p className="d-flex me-auto ms-auto">
                    { userData.user_status.split('\r\n').map(splittedItem => [splittedItem, <br />]) }
                </p>
            }
        </div>
    )
}

export default ProfileContent;