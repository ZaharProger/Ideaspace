import React, { useContext, useEffect, useState } from 'react';

import useButtonsPane from '../../../../hooks/useButtonsPane';
import { paneTemplates, profilePlaceholders } from '../../../../globalConstants';
import { profileContext } from '../../../../contexts';

const ProfileFooter = () => {
    //console.log('profile-footer');
    const [lastDate, changeLastDate] = useState("");
    const footerButtons = useButtonsPane(paneTemplates.profile_footer);
    const contextData = useContext(profileContext);

    useEffect(() => {
        const birthdayField = document.getElementById('birthday-field');

        if (birthdayField != null){
            const dateInputFocusHandler = (isFocused=true) => {
                changeLastDate(birthdayField.value);

                birthdayField.type = isFocused? 'date' : 'text';
                if (birthdayField.type == 'text'){ 
                    if (birthdayField.value != ""){
                        const newDate = birthdayField.value.split('-');
                        birthdayField.value = [newDate[2], newDate[1], newDate[0]].join('.');
                    }
                    else{
                        birthdayField.value = lastDate;
                    }
                }
            }
    
            birthdayField.onfocus = () => dateInputFocusHandler();
            birthdayField.onblur = () => dateInputFocusHandler(false); 
        }
    })

    return(
        <div id="Profile-footer" className='d-flex flex-column'>
            {
                contextData.enable_settings?
                <>
                    <input id="birthday-field" name="UserBirthday" min="1970/01/01" max="2100/01/01" autoComplete="off"
                    placeholder={ profilePlaceholders.profile_footer } className="input-placeholder"></input>
                    <div id="Footer-buttons" className="d-flex mt-4">
                    {
                        footerButtons
                    }
                    </div>
                </>
                :
                <p>{ contextData.user_data.user_birthday }</p>
            }
        </div>
    )
}

export default ProfileFooter;