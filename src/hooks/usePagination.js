import { useState } from "react";

import useRedux from './useRedux';
import useFormValidation from './useFormValidation';
import { queryStringParams, requestTypes, reduxKeys } from '../globalConstants';

const usePagination = (portionLength=null) => {
    const [validate] = useFormValidation();
    const searchLimitCallback = useRedux(reduxKeys.search_limit);
    const searchDataCallback = useRedux(reduxKeys.search_data);
    const [endIndex, changeEndIndex] = useState(portionLength !== null? portionLength : 30);

    const searchData = async () => {
        const searchField = document.getElementById('search-field');
        if (validate([searchField], requestTypes.search).error_message == ''){
            const queryParams = `${queryStringParams.search_string}=${searchField.value.trim()}&${queryStringParams.limit}=${endIndex}`;
            const queryString = `/api/Users?${queryParams}`;
            const response = await fetch(queryString, {
                method: 'GET'
            });
            
            if (response.ok){
                const responseData = await response.json();
                searchDataCallback(responseData.data);
                searchLimitCallback(responseData.isOver);
            }
        }
        else{
            searchDataCallback([]);
        }
    };

    const applyPagination = dataToObserve => {
        if (dataToObserve !== null){
            const observer = new IntersectionObserver((entries) =>{
                entries.forEach(entry => {
                    if (entry.isIntersecting){
                        changeEndIndex(endIndex + portionLength);
                        searchData();
                    }
                })
            });

            observer.observe(dataToObserve);
        }
    };

    return portionLength !== null? applyPagination : searchData;
}

export default usePagination;