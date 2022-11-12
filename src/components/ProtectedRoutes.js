import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { routes, reduxKeys, localStorageKeys, queryStringParams } from '../globalConstants';
import useRedux from '../hooks/useRedux';
import useLocalStorage from '../hooks/useLocalStorage';

const ProtectedRoutes = () => {
    const location = useLocation();
    const params = useParams();

    const isLocationAuth = location.pathname == routes.auth;

    const foundUserCallback = useRedux(reduxKeys.found_user_data);
    const profileDataCallback = useRedux(reduxKeys.profile_data);

    const { set_item: setItem, get_item: getItem } = useLocalStorage();
    const savedIsLogged = getItem(localStorageKeys.is_logged, '0');
    const isLogged = useSelector(state => state.profile_data) != null || savedIsLogged == '1';
    
    window.onbeforeunload = () => {
        setItem(localStorageKeys.is_logged, isLogged? '1' : '0');
    };

    async function getUserData(apiEndpoint, callback){
        const response = await fetch(apiEndpoint, {
            method: 'GET'
        });

        if (response.ok){
            const responseData = await response.json();
            callback(responseData.result? responseData.data[0] : null);
        }
    }

    useEffect(() => {
        if (!isLocationAuth){
            getUserData('/api/Users', profileDataCallback);
        }

        if (location.pathname.includes(routes.users_base)){
            getUserData(`/api/Users?${queryStringParams.user_login}=${params.login}`, foundUserCallback);
        }
    }, [location.pathname]);

    let component = null;
    if (isLocationAuth){
        component = isLogged? <Navigate to={ routes.main } /> : <Outlet />;
    }
    else{
        component = isLogged? <Outlet /> : <Navigate to={ routes.auth } />;
    }

    return component;
}

export default ProtectedRoutes;