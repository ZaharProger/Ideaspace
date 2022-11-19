import React, { useEffect } from 'react';

import useRedirection from '../../../hooks/useRedirection';
import { reduxKeys, routes } from '../../../globalConstants';
import usePagination from '../../../hooks/usePagination';

const NavBarSearch = () => {
    //console.log('navbar-search');
    const redirect = useRedirection();
    const { search_data: searchData } = usePagination(30, '/api/Users', reduxKeys.search_data);

    useEffect(() => {
        const searchField = document.getElementById('search-field');
        searchField.onfocus = () => redirect(routes.search);
        
        const searchButton = document.getElementById('Search-button');
        searchButton.onclick = () => {
            if (document.getElementById('Search-results') !== null){
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'auto'
                });
                searchData(searchField.value.trim());
            }
        }
        
        document.onkeydown = (e) => {
            if (e.key == 'Enter' && document.activeElement == searchField){
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'auto'
                });
                searchData(searchField.value.trim());
            }
        }

    }, [redirect]);

    return(
        <div id="Navbar-search" className="d-flex flex-row flex-grow-1 pb-4 pe-2 ps-2 w-100">
            <input id="search-field" type="text" autoComplete="off" placeholder="Логин для поиска"
            className="input-placeholder w-100 me-3"></input>
            <i id="Search-button" className="fa-solid fa-magnifying-glass mt-auto mb-auto"></i>
        </div>
    )
}

export default NavBarSearch;