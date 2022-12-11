import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { routes, reduxKeys, localStorageKeys, queryStringParams, layoutTypes } from '../globalConstants';
import useRedux from '../hooks/useRedux';
import useLocalStorage from '../hooks/useLocalStorage';
import usePagination from '../hooks/usePagination';
import useRedirection from '../hooks/useRedirection';

const ProtectedRoutes = () => {
    const redirect = useRedirection();
    const location = useLocation();
    const params = useParams();
    const isLocationAuth = location.pathname == routes.auth;

    const { search_data: searchData } = usePagination(30, '/api/Posts', reduxKeys.post_data);

    const foundUserCallback = useRedux(reduxKeys.found_user_data);
    const profileDataCallback = useRedux(reduxKeys.profile_data);
    const postDataCallback = useRedux(reduxKeys.found_post);

    const { set_item: setItem, get_item: getItem } = useLocalStorage();
    const savedIsLogged = getItem(localStorageKeys.is_logged, '0');
    const isLogged = useSelector(state => state.profile_data) != null || savedIsLogged == '1';
    
    window.onbeforeunload = () => {
        setItem(localStorageKeys.is_logged, isLogged? '1' : '0');
    };

    let layoutType = null;
    let anotherProfile = false;
    let sideEffectFuncs = [];

    async function getData(apiEndpoint, callback){
        let isSuccessfull = false;
        const response = await fetch(apiEndpoint, {
            method: 'GET'
        });

        if (response.ok){
            const responseData = await response.json();
            if (responseData.result){
                isSuccessfull = true;
                callback(responseData.data[0]);
                if ([routes.main, routes.liked].includes(location.pathname) || anotherProfile){
                    await searchData(anotherProfile? params.login : responseData.data[0].userLogin);
                }
            }
        }

        if (!isSuccessfull && location.pathname.includes(routes.post_base)){
            redirect(params.id); 
        }
    }

    if (!isLocationAuth){
        sideEffectFuncs.push({
            endpoint: '/api/Users',
            callback: profileDataCallback
        });
    }

    if (location.pathname.includes(routes.users_base)){
        layoutType = layoutTypes.both;
        anotherProfile = true;
        sideEffectFuncs.push({
            endpoint: `/api/Users?${queryStringParams.key}=${params.login}`,
            callback: foundUserCallback
        });
    }
    else if ([routes.main, routes.liked].includes(location.pathname)){
        layoutType = layoutTypes.both;
    }
    else if (location.pathname == routes.settings){
        layoutType = layoutTypes.profile;
    }
    else if(location.pathname == routes.create){
        layoutType = layoutTypes.post;
    }
    else if (location.pathname.includes(routes.post_base)){
        layoutType = layoutTypes.post;
        sideEffectFuncs.push({
            endpoint: `/api/Posts/${params.id}`,
            callback: postDataCallback
        });
    }
    else if(location.pathname == routes.search){
        layoutType = layoutTypes.search;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);

        sideEffectFuncs.forEach(sideEffectFunc => {
            getData(sideEffectFunc.endpoint, sideEffectFunc.callback);
        });

    }, [location.pathname]);

    let component = null;
    if (isLocationAuth){
        component = isLogged? <Navigate to={ routes.main } /> : <Outlet />;
    }
    else{
        component = isLogged? <Outlet context={{
            layout_type: layoutType,
            another_profile: anotherProfile
        }} /> : <Navigate to={ routes.auth } />;
    }

    return component;
}

export default ProtectedRoutes;