import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { routes, localStorageKeys, queryStringParams } from '../globalConstants';
import changeUserData from '../state-manager/actions/changeUserData';

const ProtectedRoutes = () => {
    const location = useLocation();
    
    //localStorage.clear();
    const sessionId = localStorage.getItem(localStorageKeys.session_id);

    const dispatch = useDispatch();
    const dispatchCallback = useCallback((userData) => dispatch(changeUserData(userData)), [sessionId]);
  
    useEffect(() => {
        async function getUserData(){
            const response = await fetch(`/api/Users?${queryStringParams.session_id}=${sessionId}`, {
                method: 'GET'
            });
    
            if (response.ok){
                const responseData = await response.json();
                if (responseData.result){
                    dispatchCallback(responseData.data[0]);
                }
            }
        }
      
        if (sessionId != null){
            getUserData();
        }
    });
    
    let component = null;
    if (location.pathname == routes.auth){
        component = sessionId != null? <Navigate to={ routes.main } /> : <Outlet />
    }
    else{
        component = sessionId != null? <Outlet /> : <Navigate to={ routes.auth } />
    }

    return component;
}

export default ProtectedRoutes;