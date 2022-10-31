import React, { useContext} from 'react';

import useButtonsPane from '../../../../hooks/useButtonsPane';
import { paneTemplates, profilePlaceholders } from '../../../../globalConstants';
import { profileContext } from '../../../../contexts';

const ProfileFooter = () => {
    //console.log('profile-footer');
    const footerButtons = useButtonsPane(paneTemplates.profile_footer);
    const contextData = useContext(profileContext);

    const convertedBirthday = contextData.user_data.user_birthday != null?
        new Date(contextData.user_data.user_birthday * 1000).toLocaleDateString() : "";
    const birthdayPlaceholder = convertedBirthday == ""? profilePlaceholders.profile_footer : convertedBirthday;
    
    return(
        <div id="Profile-footer" className='d-flex flex-column'>
            {
                contextData.enable_settings?
                <>
                    <input name="Birthday" type="date" min="1970/01/01" max="2100/01/01" autoComplete="off"
                    placeholder={ birthdayPlaceholder } className="input-placeholder"></input>
                    <div id="Footer-buttons" className="d-flex mt-4">
                    {
                        footerButtons
                    }
                    </div>
                </>
                :
                <p>{ convertedBirthday }</p>
            }
        </div>
    )
}

export default ProfileFooter;