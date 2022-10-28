import React, { useContext } from 'react';

import useButtonsPane from '../../../../hooks/useButtonsPane';
import { paneTemplates } from '../../../../globalConstants';
import { profileContext } from '../../../../contexts';

const ProfileFooter = () => {
    //console.log('profile-footer');
    const footerButtons = useButtonsPane(paneTemplates.profile_footer);
    const contextData = useContext(profileContext);

    const convertedBirthday = new Date(contextData.user_data.user_birthday);
    
    return(
        <div id="Profile-footer" className='d-flex flex-column'>
            {
                contextData.enable_settings?
                <>
                    <input type="text" autoComplete="off" placeholder="дд.мм.гггг" className="input-placeholder"></input>
                    <div id="Footer-buttons" className="d-flex mt-4">
                    {
                        footerButtons
                    }
                    </div>
                </>
                :
                <p>{ convertedBirthday.toLocaleDateString() }</p>
            }
        </div>
    )
}

export default ProfileFooter;