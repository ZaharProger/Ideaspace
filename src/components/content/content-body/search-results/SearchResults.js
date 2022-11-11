import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import SearchItem from '../search-results/SearchItem';
import usePagination from '../../../../hooks/usePagination';
import PageEnd from './PageEnd';

const SearchResults = (props) => {
    const foundData = useSelector(state => state.search_data);
    const searchLimit = useSelector(state => state.search_limit);

    const isDataFound = foundData.length != 0;
    const applyPagination = usePagination(30);

    useEffect(() => {
        applyPagination(document.getElementById('Page-end'));
    }, [applyPagination]);

    return(
        <div id="Search-results" className={ `d-flex flex-column me-auto ms-auto ${props.search_width}` }>
            <span id="Search-results-header" className="mb-3">{ isDataFound? 'Результаты поиска' : 'Ничего не найдено...' }</span>
            {
                isDataFound? 
                <>
                {
                    foundData.map(responseItem => <SearchItem key={ responseItem.user_login } item_data={ responseItem } />)
                }
                {
                    searchLimit? null : <PageEnd />
                }
                </> : null
            }
        </div>
    )
}

export default SearchResults;