import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { localStorageKeys, routes } from '../globalConstants';

const ProtectedRoutes = () => {
    // localStorage.clear();
    const location = useLocation();
    const sessionId = localStorage.getItem(localStorageKeys.session_id);
    
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