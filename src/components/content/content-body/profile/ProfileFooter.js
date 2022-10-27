import React, { useContext } from 'react';

import useButtonsPane from '../../../../hooks/useButtonsPane';
import { paneTemplates } from '../../../../globalConstants';
import { profileContext } from '../../../../contexts';

const ProfileFooter = () => {
    //console.log('profile-footer');
    const footerButtons = useButtonsPane(paneTemplates.profile_footer);
    const enableSettings = useContext(profileContext);

    return(
        <div id="Profile-footer" className='d-flex flex-column'>
            {
                enableSettings?
                <>
                    <input type="text" autoComplete="off" placeholder="дд.мм.гггг" className="input-placeholder"></input>
                    <div id="Footer-buttons" className="d-flex mt-4">
                    {
                        footerButtons
                    }
                    </div>
                </>
                :
                <p>12.09.2002</p>
            }
        </div>
    )
}

export default ProfileFooter;