import { useNavigate } from "react-router-dom";

import { localStorageKeys, paneTemplates, queryStringParams, routes } from "../globalConstants";
import NavBarListItem from "../components/content/navbar/NavBarListItem";

const useButtonsPane = (template) => {
    const navigate = useNavigate();
    const buttonsPane = [];

    for (let i = 0; i < template.length; ++i){
        if (template == paneTemplates.navigation){
            const { key , icon, caption, route } = template[i];
            let callback = null;
            switch (route){
                case routes.main:
                case routes.settings:
                case routes.create:
                    callback = () => navigate(route);
                    break;
                case routes.auth:
                    callback = async () => {
                        const sessionId = localStorage.getItem(localStorageKeys.session_id);
                        const response = await fetch(`/api/Users?${queryStringParams.session_id}=${sessionId}`, {
                            method: 'DELETE'
                        });

                        if (response.ok){
                            localStorage.removeItem(localStorageKeys.session_id);
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
            buttonsPane.push(<button type="button" key={ key } className="p-2">{ caption }</button>);
        }
    }

    return buttonsPane;
}

export default useButtonsPane;