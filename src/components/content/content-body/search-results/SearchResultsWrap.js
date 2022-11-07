import React from 'react';

import SearchResults from './SearchResults';
import '../../../../styles/search-results.css';

const SearchResultsWrap = (props) => {
    const display = props.search_results_props.search_visibility? 'd-flex' : 'd-none';

    return(
        <div id="Search-results-wrap" className={ `${display} flex-column search-results-scrollbar mt-3 w-100` }>
            <div id="close-search-button" className="d-flex position-fixed flex-row ms-2 me-5">
                <i className="fa-regular fa-arrow-left me-2"></i>
                {
                    props.search_results_props.search_width != ''? <span className="d-flex mt-auto mb-auto">Назад</span> : null
                }
            </div>    
            <SearchResults search_results_props={ {
                found_data: props.search_results_props.found_data,
                search_width: props.search_results_props.search_width
            } }/>         
        </div>
    )
}

export default SearchResultsWrap;