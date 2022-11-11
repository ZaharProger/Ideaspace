import { useLocation, useNavigate } from "react-router-dom"

import { reduxKeys, routes } from "../globalConstants";
import useRedux from "./useRedux";

const useRedirection = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const searchDataCallback = useRedux(reduxKeys.search_data);

    return function(route){
        if (location.pathname != route){
            if (location.pathname != routes.search){
                searchDataCallback([]);
            }
            navigate(route);
        }
    }
}

export default useRedirection;