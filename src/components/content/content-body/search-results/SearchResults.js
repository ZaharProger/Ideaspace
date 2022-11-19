import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import SearchItem from '../search-results/SearchItem';
import usePagination from '../../../../hooks/usePagination';
import PageEnd from './PageEnd';
import { reduxKeys, routes } from '../../../../globalConstants';
import useRedirection from '../../../../hooks/useRedirection';

const SearchResults = (props) => {
    const redirect = useRedirection();
    const foundData = useSelector(state => state.search_data);
    const isDataFound = foundData.data.length != 0;
    const { apply_pagination: applyPagination } = usePagination(30, '/api/Users', reduxKeys.search_data, foundData.end_index);

    useEffect(() => {
        Array.from(document.getElementsByClassName('Search-item')).forEach(searchItem => {
            searchItem.onclick = () => {
                searchItem.classList.add('chosen');
                redirect(routes.users);
            }
        });

        applyPagination(document.getElementById('search-field').value.trim());
    }, [applyPagination]);

    return(
        <div id="Search-results" className={ `d-flex flex-column me-auto ms-auto ${props.search_width}` }>
            <span id="Search-results-header" className="mb-3">{ isDataFound? 'Результаты поиска' : 'Ничего не найдено...' }</span>
            {
                isDataFound? 
                <>
                {
                    foundData.data.map(responseItem => <SearchItem key={ responseItem.userLogin } item_data={ responseItem } />)
                }
                {
                    foundData.search_limit? null : <PageEnd />
                }
                </> : null
            }
        </div>
    )
}

export default SearchResults;