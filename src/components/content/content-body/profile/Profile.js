import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import ProfileFooter from './ProfileFooter';
import { contentContext, profileContext } from '../../../../contexts';
import '../../../../styles/profile.css';

const Profile = () => {
    const contentContextData = useContext(contentContext);
    //console.log('profile');
    let userData = useSelector(state => 
        contentContextData.another_profile? state.found_user_profile_data : state.profile_data);
    if (userData === null){
        userData = {
            user_login: '',
            user_status: null,
            user_birthday: null
        }
    }

    const profileContextData = {
        user_data: {
            ...userData,
            user_status: userData.user_status != null? userData.user_status : 'Пользователя не существует в системе :(',
            user_birthday: userData.user_birthday != null?
            new Date(userData.user_birthday * 1000).toLocaleDateString('fr-CH') : ''
        }
    };   

    const profileMargins = `profile-position-settings-${contentContextData.enable_settings? 'on' : 'off'}`; 

    useEffect(() => {
        Array.from(document.getElementById('Profile').querySelectorAll('textarea, input')).forEach(input => {
            switch (input.name){
                case 'UserStatus':
                    input.value = profileContextData.user_data.user_status;
                    break;
                case 'UserBirthday':
                    input.onfocus = () => input.type = 'date';
                    input.onblur = () => {
                        input.type = 'text';
                        if (input.value != ''){
                            const splittedDate = input.value.split('-');
                            input.value = [splittedDate[2], splittedDate[1], splittedDate[0]].join('.');
                        }
                    };
                    input.value = profileContextData.user_data.user_birthday;
                    break;
            }
        })
    });

    return(
        <div id="Profile" className={`d-flex flex-column col-5 p-2 ${profileMargins}`}>
            <profileContext.Provider value={ profileContextData } >
                <ProfileHeader />
                <ProfileContent />
                <ProfileFooter />
            </profileContext.Provider>
        </div>
    )
}

export default Profile;