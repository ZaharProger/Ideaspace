import { useRef } from "react";

import useRedux from './useRedux';
import useFormValidation from './useFormValidation';
import { queryStringParams, requestTypes, reduxKeys } from '../globalConstants';

const usePagination = (portionLength, currentEndIndex=0) => {
    const [validate] = useFormValidation();

    const searchLimitCallback = useRedux(reduxKeys.search_limit);
    const searchDataCallback = useRedux(reduxKeys.search_data);
    const endIndexCallback = useRedux(reduxKeys.end_index);

    const observer = useRef();

    const applyPagination = () => {
        const eventFireObject = document.getElementById('Page-end');
        if (eventFireObject !== null){
            if (observer.current){
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting){
                        searchData();
                    }
                });
            }, { rootMargin: '200px' });

            observer.current.observe(eventFireObject);
        }
    }

    const searchData = async () => {
        const searchField = document.getElementById('search-field');

        if (validate([searchField], requestTypes.search).error_message == ''){
            const searchString = searchField.value.trim();
            const finalEndIndex =  currentEndIndex + portionLength;

            const queryParams = `${queryStringParams.search_string}=${searchString}&${queryStringParams.limit}=${finalEndIndex}`;
            const queryString = `/api/Users?${queryParams}`;
            const response = await fetch(queryString, {
                method: 'GET'
            });
            
            if (response.ok){
                const responseData = await response.json();
                searchDataCallback(responseData.data);
                searchLimitCallback(responseData.isOver);
                endIndexCallback(finalEndIndex);
            }
        }
        else{
            searchDataCallback(Array());
            endIndexCallback(0);
        }
    };

    return {
        apply_pagination: applyPagination,
        search_data: searchData
    };
}

export default usePagination;