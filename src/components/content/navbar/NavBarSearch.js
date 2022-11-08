import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useRedux from '../../../hooks/useRedux';
import useFormValidation from '../../../hooks/useFormValidation';
import { queryStringParams, requestTypes, reduxKeys, routes } from '../../../globalConstants';


const NavBarSearch = () => {
    //console.log('navbar-search');
    const navigate = useNavigate();
    const [validate] = useFormValidation();
    const searchDataCallback = useRedux(reduxKeys.search_data);

    useEffect(() => {
        const searchField = document.getElementById('search-field');
        searchField.onfocus = () => navigate(routes.search);

        const searchData = async () => {
            if (validate([searchField], requestTypes.search).error_message == ''){
                const response = await fetch(`/api/Users?${queryStringParams.search_string}=${searchField.value.trim()}`, {
                    method: 'GET'
                });
                
                if (response.ok){
                    const responseData = await response.json();
                    searchDataCallback(responseData.data);            
                }
            }
            else{
                searchDataCallback([]);
            }
        };
        
        const searchButton = document.getElementById('Search-button');
        searchButton.onclick = () => {
            if (document.getElementById('Search-results') !== null){
                searchData();
            }
        }
        document.onkeydown = (e) => {
            if (e.key == 'Enter' && document.activeElement == searchField){
                searchData();
            }
        }
    });

    return(
        <div id="Navbar-search" className="d-flex flex-row flex-grow-1 pb-4 pe-2 ps-2 w-100">
            <input id="search-field" type="text" autoComplete="off" placeholder="Логин для поиска"
            className="input-placeholder w-100 me-3"></input>
            <i id="Search-button" className="fa-solid fa-magnifying-glass mt-auto mb-auto"></i>
        </div>
    )
}

export default NavBarSearch;