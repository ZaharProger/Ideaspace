import { useNavigate } from "react-router-dom";

import { routes, navigate_buttons } from "../globalConstants";

const useRedirect = (objectName) => {
    const navigate = useNavigate();

    switch(objectName){
        case navigate_buttons.nav_items.navbar_logo:
            return () => navigate(routes.main);
        case navigate_buttons.nav_items.settings:
            return () => navigate(routes.settings);
        case navigate_buttons.nav_items.create_post:
            return () => navigate(routes.create);
        case navigate_buttons.nav_items.liked:
            return () => navigate(routes.main);
        case navigate_buttons.nav_items.sign_out:
            return () => navigate(routes.auth);
        case navigate_buttons.login_form.login:
            return () => navigate(routes.main);
    }
}

export default useRedirect;