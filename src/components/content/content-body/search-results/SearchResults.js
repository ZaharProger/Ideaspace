import React, { useEffect, useState } from 'react';

const SearchResults = (props) => {
    const [lastIndex, changeLastIndex] = useState(29);
    const foundData = props.search_results_props.found_data;
    const isDataFound = foundData.length != 0;

    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    console.log(1);
                }
            })
        });

        if (isDataFound){
            observer.observe(foundData[lastIndex]);
        }
    })

    return(
        <div id="Search-results" className={ `d-flex flex-column me-auto ms-auto ${props.search_results_props.search_width}` }>
            <span id="Search-results-header" className="mb-3"></span>
            {

                isDataFound? props.search_results_props.found_data : null
            }
        </div>
    )
}

export default SearchResults;