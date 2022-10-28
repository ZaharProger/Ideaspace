import React, { useContext } from 'react';

import { profileContext } from '../../../../contexts';

const ProfileContent = () => {
    //console.log('profile-content');
    const contextData = useContext(profileContext);

    return(
        <div id="Profile-content" className="d-flex mb-4">
            {
                contextData.enable_settings?
                <textarea type="text" autoComplete="off" placeholder="Статус" className="input-placeholder w-100"></textarea>
                :
                <i className="d-flex me-auto ms-auto">{ contextData.user_data.user_status }</i>
            }
        </div>
    )
}

export default ProfileContent;