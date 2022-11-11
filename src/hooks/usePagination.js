import { useRef, useState } from "react";

import useRedux from './useRedux';
import useFormValidation from './useFormValidation';
import { queryStringParams, requestTypes, reduxKeys } from '../globalConstants';

const usePagination = (portionLength=null) => {
    const [validate] = useFormValidation();

    const searchLimitCallback = useRedux(reduxKeys.search_limit);
    const searchDataCallback = useRedux(reduxKeys.search_data);
    const [endIndex, changeEndIndex] = useState(portionLength !== null? portionLength : 30);
    const [isFetching, changeIsFetching] = useState(false);
    console.log(endIndex);

    const observer = useRef();

    const applyPagination = () => {
        if (portionLength !== null){
            const eventFireObject = document.getElementById('Page-end');
            if (eventFireObject !== null){
                if (observer.current){
                    observer.current.disconnect();
                }

                observer.current = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !isFetching){
                            changeIsFetching(true);
                            searchData();
                        }
                    });
                }, { rootMargin: '200px' });
    
                observer.current.observe(eventFireObject);
            }
        }
    }

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
                changeEndIndex(endIndex + portionLength);
                changeIsFetching(false);
            }
        }
        else{
            searchDataCallback(Array());
            changeEndIndex(30);
        }
    };

    return portionLength !== null? applyPagination : searchData;
}

export default usePagination;