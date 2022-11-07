import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './navbar/NavBar';
import Content from './content-body/Content';
import SearchItem from './content-body/search-results/SearchItem';
import { navBarContext } from '../../contexts';
import { layoutTypes, routes, queryStringParams, requestTypes } from '../../globalConstants';
import useFormValidation from '../../hooks/useFormValidation';

const ContentWrap = () => {
    //console.log('content-wrap');
    const location = useLocation();
    const [menuButtonStatus, changeMenuButtonStatus] = useState(window.innerWidth <= 1100);
    const [navBarSearchStatus, changeNavBarSearchStatus] = useState(window.innerWidth <= 1100);
    const [wallWidth, changeWallWidth] = useState('col-7');
    const [searchResultsWidth, changeSearchResultsWidth] = useState('col-5');
    const [foundData, changeFoundData] = useState(Array());
    const [searchResultsVisibility, changeSearchResultsVisibility] = useState(false);
    const [validate] = useFormValidation();
    
    window.onresize = () => {
        const isMediaActive = window.innerWidth <= 1100;

        changeMenuButtonStatus(isMediaActive);
        changeNavBarSearchStatus(isMediaActive);
        changeWallWidth(isMediaActive? '' : 'col-7');
        changeSearchResultsWidth(isMediaActive? '' : 'col-5');
    }

    let layoutType;
    switch (location.pathname){
        case routes.main:
            layoutType = layoutTypes.both;
            break;
        case routes.settings:
            layoutType = layoutTypes.profile;
            break;
        case routes.create:
            layoutType = layoutTypes.post;
            break;
    }

    useEffect(() => {
        const searchField = document.getElementById('search-field');
        searchField.oninput = () => setTimeout(async () => {
            const searchResultsHeader = document.getElementById('Search-results-header');
            searchResultsHeader.innerText = 'Подождите...';

            if (validate([searchField], requestTypes.search).error_message == ''){
                const response = await fetch(`/api/Users?${queryStringParams.search_string}=${searchField.value.trim()}`, {
                    method: 'GET'
                });
                
                if (response.ok){
                    const responseData = await response.json();
                    if (responseData.result){
                        changeFoundData(responseData.data.map(responseItem => {
                            return <SearchItem key={ responseItem.user_login } item_data={ responseItem } />
                        }));
                        changeSearchResultsVisibility(true);
                    }
                    searchResultsHeader.innerText = responseData.result? 'Результаты поиска' : 'Ничего не найдено...';                  
                }
            }
            else{
                changeFoundData(Array());
                searchResultsHeader.innerText = 'Ничего не найдено...';
            }
        }, 500);

        searchField.onfocus = () => changeSearchResultsVisibility(true);
        const closeSearchButton = document.getElementById('close-search-button');
        if (closeSearchButton !== null){
            closeSearchButton.onclick = () => changeSearchResultsVisibility(false);
        }
    })

    return (
        <div id="Content-wrap" className='d-flex flex-column'>
            <navBarContext.Provider value={ menuButtonStatus }>
                <NavBar />
            </navBarContext.Provider>
            <Content content_props={ {
                navbar_search_status: navBarSearchStatus,
                layout_type: layoutType,
                wall_width: wallWidth,
                found_data: foundData,
                search_visibility: searchResultsVisibility,
                search_width: searchResultsWidth
            } } />
        </div>
    )
}

export default ContentWrap;