import React, { useContext } from 'react';

import { profileContext } from '../../../../contexts';

const ProfileContent = () => {
    //console.log('profile-content');
    const enableSettings = useContext(profileContext);

    return(
        <div id="Profile-content" className="d-flex mb-4">
            {
                enableSettings?
                <textarea type="text" autoComplete="off" placeholder="Статус" className="input-placeholder w-100"></textarea>
                :
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.</i>
            }
        </div>
    )
}

export default ProfileContent;