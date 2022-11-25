import { useRef } from "react";
import { useLocation } from 'react-router-dom';

import useRedux from './useRedux';
import { queryStringParams, reduxKeys, routes } from '../globalConstants';

const usePagination = (portionLength, apiEndpoint, listKey, currentEndIndex=0) => {
    const savedApiEndpoint = apiEndpoint;
    const reduxCallback = useRedux(listKey);
    const observer = useRef();
    const location = useLocation();

    const applyPagination = (keyToSearch) => {
        const eventFireObject = document.getElementById('Page-end');
        if (eventFireObject !== null){
            if (observer.current){
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting){
                        searchData(keyToSearch);
                    }
                });
            }, { rootMargin: '200px' });

            observer.current.observe(eventFireObject);
        }
    }

    const searchData = async (keyToSearch) => {
        if (!keyToSearch.split(/[\s]?/).every(splittedItem => splittedItem == '')){
            const finalEndIndex =  currentEndIndex + portionLength;

            let queryParams = `${queryStringParams.key}=${keyToSearch}&${queryStringParams.limit}=${finalEndIndex}`;
            if (listKey == reduxKeys.post_data){
                queryParams += location.pathname == routes.liked? `&${queryStringParams.predicate}=${1}` :
                location.pathname == routes.main? `&${queryStringParams.predicate}=${2}` : 
                `&${queryStringParams.predicate}=${0}`;
            }
            const queryString = `${savedApiEndpoint}?${queryParams}`;

            const response = await fetch(queryString, {
                method: 'GET'
            });
            
            if (response.ok){
                const { isOver, data: foundData } = await response.json();
                reduxCallback({
                    search_limit: isOver,
                    end_index: finalEndIndex,
                    data: foundData
                });
            }
        }
        else{
            reduxCallback({
                search_limit: false,
                end_index: 0,
                data: Array(0)
            });
        }
    };

    return {
        apply_pagination: applyPagination,
        search_data: searchData
    };
}

export default usePagination;