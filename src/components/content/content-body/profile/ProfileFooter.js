import React, { useContext } from 'react';

import useButtonsPane from '../../../../hooks/useButtonsPane';
import { paneTemplates, placeholders } from '../../../../globalConstants';
import { contentContext, profileContext } from '../../../../contexts';
import FooterButtons from '../FooterButtons';

const ProfileFooter = () => {
    //console.log('profile-footer');
    const footerButtons = useButtonsPane(paneTemplates.profile_footer);
    const userData = useContext(profileContext).user_data;
    const enableSettings = useContext(contentContext).enable_settings;

    return(
        <div id="Profile-footer" className='d-flex flex-column'>
            {
                enableSettings?
                <>
                    <input id="birthday-field" name="UserBirthday" min="1900/01/01" max="2100/01/01" autoComplete="off"
                    placeholder={ placeholders.profile_footer } className="input-placeholder"></input>
                    <FooterButtons buttons={ footerButtons } />
                </>
                :
                <p>{ userData.userBirthday }</p>
            }
        </div>
    )
}

export default ProfileFooter;