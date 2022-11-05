import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { routes, reduxKeys, localStorageKeys } from '../globalConstants';
import useRedux from '../hooks/useRedux';

const ProtectedRoutes = () => {
    const location = useLocation();
    const reduxCallback = useRedux(reduxKeys.get_user);
    
    let savedIsLogged = false;
    if (localStorage.getItem(localStorageKeys.is_logged) != null){
        savedIsLogged = localStorage.getItem(localStorageKeys.is_logged) == '1';
        localStorage.removeItem(localStorageKeys.is_logged);
    }

    const isLogged = useSelector(state => state.user_data) != null ;
    const isLocationAuth = location.pathname == routes.auth;

    window.onbeforeunload = () => {
        localStorage.setItem(localStorageKeys.is_logged, isLogged? '1' : '0');
    };

    async function getUserData(){
        const response = await fetch('/api/Users', {
            method: 'GET'
        });

        if (response.ok){
            const responseData = await response.json();
            reduxCallback(responseData.result? responseData.data[0] : null);
        }
    }

    useEffect(() => {
        if (!isLocationAuth && !isLogged){
            getUserData();
        }
    })

    let component = null;
    if (isLocationAuth){
        component = isLogged || savedIsLogged? <Navigate to={ routes.main } /> : <Outlet />;
    }
    else{
        component = isLogged || savedIsLogged? <Outlet /> : <Navigate to={ routes.auth } />;
    }

    return component;
}

export default ProtectedRoutes;