import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { routes } from '../globalConstants';
import changeUserData from '../state-manager/actions/changeUserData';

const ProtectedRoutes = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const dispatchCallback = useCallback((userData) => dispatch(changeUserData(userData)), []);
    const [isLogged, changeIsLogged] = useState(false);

    useEffect(() => {
        async function getUserData(){
            const response = await fetch('/api/Users', {
                method: 'GET'
            });
    
            if (response.ok){
                const responseData = await response.json();
                if (responseData.result){
                    dispatchCallback(responseData.data[0]);
                }
                changeIsLogged(responseData.result);
            }
        }
    
        getUserData();
    })

    
    let component = null;
    if (location.pathname == routes.auth){
        component = isLogged ? <Navigate to={ routes.main } /> : <Outlet />
    }
    else{
        component = isLogged ? <Outlet /> : <Navigate to={ routes.auth } />
    }

    return component;
}

export default ProtectedRoutes;