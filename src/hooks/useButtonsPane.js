import { useNavigate } from "react-router-dom";

import { buttons, paneTemplates, routes } from "../globalConstants";
import NavBarListItem from "../components/content/navbar/NavBarListItem";

const useButtonsPane = (template) => {
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