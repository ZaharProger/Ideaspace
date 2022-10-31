import React, { useContext } from 'react';

import { profileContext } from '../../../../contexts';
import { profilePlaceholders } from '../../../../globalConstants';

const ProfileContent = () => {
    //console.log('profile-content');
    const contextData = useContext(profileContext);

    const userStatus = contextData.user_data.user_status != null? contextData.user_data.user_status : "";
    const statusPlaceholder = userStatus == ""? profilePlaceholders.profile_content : userStatus;

    return(
        <div id="Profile-content" className="d-flex mb-4">
            {
                contextData.enable_settings?
                <textarea name="Status" type="text" autoComplete="off" placeholder={ statusPlaceholder }
                className="input-placeholder w-100"></textarea>
                :
                <p className="d-flex me-auto ms-auto">{ userStatus }</p>
            }
        </div>
    )
}

export default ProfileContent;