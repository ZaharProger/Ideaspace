import React, { useContext } from 'react';

import { profileContext } from '../../../../contexts';
import { profilePlaceholders } from '../../../../globalConstants';

const ProfileContent = () => {
    //console.log('profile-content');
    const contextData = useContext(profileContext);

    return(
        <div id="Profile-content" className="d-flex mb-4">
            {
                contextData.enable_settings?
                <textarea name="UserStatus" type="text" autoComplete="off" placeholder={ profilePlaceholders.profile_content }
                className="input-placeholder w-100"></textarea>
                :
                <p className="d-flex me-auto ms-auto">{ contextData.user_data.user_status }</p>
            }
        </div>
    )
}

export default ProfileContent;