import React from 'react';

import SearchResults from './SearchResults';
import '../../../../styles/search-results.css';

const SearchResultsWrap = (props) => {
    return(
        <div id="Search-results-wrap" className='d-flex flex-column mt-3 w-100'>   
            <SearchResults search_width={ props.search_results_width } />         
        </div>
    )
}

export default SearchResultsWrap;