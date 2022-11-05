import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { buttons, paneTemplates, reduxKeys, routes } from "../globalConstants";
import NavBarListItem from "../components/content/navbar/NavBarListItem";
import useRedux from "./useRedux";


const useButtonsPane = (template) => {
    const signOutCallback = useRedux(reduxKeys.sign_out);
    const updateUserCallback = useRedux(reduxKeys.get_user);
    const currentUser = useSelector(state => state.user_data);
    const navigate = useNavigate();

    const buttonsPane = [];
    for (let i = 0; i < template.length; ++i){
        if (template == paneTemplates.navigation){
            const { key , icon, caption, route } = template[i];
            let callback = null;
            switch (key){
                case buttons.settings:
                case buttons.create:
                    callback = () => navigate(route);
                    break;
                case buttons.sign_out:
                    callback = async () => {
                        const response = await fetch('/api/Users?', {
                            method: 'DELETE'
                        });

                        if (response.ok){
                            signOutCallback();
                            navigate(route);
                        }
                    }
                    break;
            }

            buttonsPane.push(
            <NavBarListItem key={ key } navbar_item_props={{
                icon: icon,
                caption: caption,
                route: route,
                callback: callback
            }}/>);
        }
        else if (template == paneTemplates.profile_footer){
            const { key, caption } = template[i];
            let callback = null;
            switch(key){
                case buttons.save_profile:
                    callback = async () => {
                        const saveButton = document.getElementById('save-button');
                        const prevCaption = saveButton.innerText;
                        saveButton.innerText = 'Подождите...';

                        const profileInputs = Array.from(document.getElementById('Profile').querySelectorAll('input, textarea'));
                        const profileForm = new FormData();
                        profileInputs.forEach(profileInput => {
                            let fieldValue = profileInput.value;
                            if (profileInput.name == 'UserBirthday'){
                                const splittedDate = profileInput.value.split('.');
                                fieldValue = Math.floor(new Date([splittedDate[2], splittedDate[1], splittedDate[0]]
                                    .join('-')).getTime() / 1000);
                            }
                            profileForm.append(profileInput.name, fieldValue);
                        })

                        const response = await fetch('/api/Users', {
                            method: 'PUT',
                            body: profileForm
                        });

                        if (response.ok){
                            saveButton.innerText = prevCaption;
                            updateUserCallback({
                                ...currentUser,
                                user_status: profileForm.get('UserStatus'),
                                user_birthday: profileForm.get('UserBirthday')
                            });
                            navigate(routes.main);
                        }
                    }
                    break;
                case buttons.cancel:
                    callback = () => navigate(routes.main);
                    break;
            }

            buttonsPane.push(<button id={ key == buttons.save_profile? 'save-button' : '' } type="button" key={ key } className="p-2"
            onClick={ () => callback() }>{ caption }</button>);
        }
    }

    return buttonsPane;
}

export default useButtonsPane;