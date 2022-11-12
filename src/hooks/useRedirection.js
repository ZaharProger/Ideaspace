import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"

import { reduxKeys, routes } from "../globalConstants";
import useRedux from "./useRedux";

const useRedirection = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const profileLogin = useSelector(state => state.profile_data !== null? state.profile_data.user_login : '');
    const searchDataCallback = useRedux(reduxKeys.search_data);

    return function(route){
        if (location.pathname != route){
            if (location.pathname != routes.search){
                searchDataCallback([]);
            }

            if (route == routes.users){
                const chosenSearchItem = document.querySelector('.chosen');
                const chosenSearchItemLogin = chosenSearchItem.querySelector('span').innerText;
                chosenSearchItem.classList.remove('chosen');

                route = profileLogin == chosenSearchItemLogin? routes.main : routes.users_base + chosenSearchItemLogin;
            }

            navigate(route);
        }
    }
}

export default useRedirection;