import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import ProfileFooter from './ProfileFooter';
import { profileContext } from '../../../../contexts';
import '../../../../styles/profile.css';

const Profile = (props) => {
    //console.log('profile');
    let userData = useSelector(state => state.user_data);
    if (userData === null){
        userData = {
            user_login: '',
            user_status: null,
            user_birthday: null
        }
    }

    const profileMargins = `profile-position-settings-${props.enable_settings? 'on' : 'off'}`;
    const contextData = {
        user_data: {
            ...userData,
            user_status: userData.user_status != null? userData.user_status : '',
            user_birthday: userData.user_birthday != null?
            new Date(userData.user_birthday * 1000).toLocaleDateString() : ''
        },
        enable_settings: props.enable_settings
    };    

    const getInputValue = (inputName) => {
        let inputValue = "";

        switch (inputName){
            case 'UserStatus':
                inputValue = contextData.user_data.user_status;
                break;
            case 'UserBirthday':
                inputValue = contextData.user_data.user_birthday;
                break;
        }

        return inputValue;
    }

    useEffect(() => {
        Array.from(document.getElementById('Profile').querySelectorAll('textarea, input')).forEach(input => {
            input.value = getInputValue(input.name);
        })
    });

    return(
        <div id="Profile" className={`d-flex flex-column col-5 p-2 ${profileMargins}`}>
            <profileContext.Provider value={ contextData } >
                <ProfileHeader />
                <ProfileContent />
                <ProfileFooter />
            </profileContext.Provider>
        </div>
    )
}

export default Profile;