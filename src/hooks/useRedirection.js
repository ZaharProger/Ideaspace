import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"

import { reduxKeys, routes } from "../globalConstants";
import useRedux from "./useRedux";

const useRedirection = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const profileLogin = useSelector(state => state.profile_data !== null? state.profile_data.userLogin : '');
    const searchDataCallback = useRedux(reduxKeys.search_data);

    return function(route){
        if (location.pathname != route){
            if (location.pathname != routes.search){
                searchDataCallback({
                    search_limit: false,
                    end_index: 0,
                    data: Array(0)
                });
            }

            if ([routes.users, routes.post].includes(route)){
                const chosenElement = document.querySelector('.chosen');
                const chosenElementData = route == routes.users? chosenElement.querySelector('span').innerText : chosenElement.id;
                chosenElement.classList.remove('chosen');
                
                if (route == routes.users){
                    route = profileLogin == chosenElementData? routes.main : routes.users_base + chosenElementData;
                }
                else{
                    route = routes.post_base + chosenElementData;
                }
            }

            navigate(route);
        }
    }
}

export default useRedirection;