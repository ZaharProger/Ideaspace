import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import SearchItem from '../search-results/SearchItem';
import usePagination from '../../../../hooks/usePagination';
import PageEnd from './PageEnd';

const SearchResults = (props) => {
    const foundData = useSelector(state => state.search_data).map(responseItem => {
        return <SearchItem key={ responseItem.user_login } item_data={ responseItem } />
    });
    const isDataFound = foundData.length != 0;
    const [applyPagination, updatePage] = usePagination(foundData, 30);

    const dataPortion = updatePage();
    useEffect(() => {
        applyPagination(document.getElementById('Page-end'));
    }, [foundData]);

    return(
        <div id="Search-results" className={ `d-flex flex-column me-auto ms-auto ${props.search_width}` }>
            <span id="Search-results-header" className="mb-3">{ isDataFound? 'Результаты поиска' : 'Ничего не найдено...' }</span>
            {
                isDataFound? 
                <>
                {
                    dataPortion
                }
                {
                    dataPortion.length != foundData.length? <PageEnd /> : null
                }
                </> : null
            }
        </div>
    )
}

export default SearchResults;