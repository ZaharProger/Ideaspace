import { useLocation, useNavigate } from "react-router-dom"

const useRedirection = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return function(route){
        if (location.pathname != route){
            navigate(route);
        }
    }
}

export default useRedirection;