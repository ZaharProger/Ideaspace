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
                        const profileInputs = Array.from(document.getElementById('Profile').querySelectorAll('p, textarea'));
                        const profileForm = new FormData();
                        profileInputs.forEach(profileInput => {
                            profileForm.append(profileInput.name, profileInput.value);
                        })

                        const response = await fetch('/api/Users', {
                            method: 'PUT',
                            body: profileForm
                        });

                        if (response.ok){
                            navigate(routes.main)
                        }
                    }
                    break;
                case buttons.cancel:
                    callback = () => navigate(routes.main);
                    break;
            }

            buttonsPane.push(<button type="button" key={ key } className="p-2" onClick={ () => callback() }>{ caption }</button>);
        }
    }

    return buttonsPane;
}

export default useButtonsPane;