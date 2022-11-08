import { SEARCH_DATA } from "../stateConstants";

const changeSearchData = (searchData) => {
    return {
        type: SEARCH_DATA,
        search_data: searchData
    }
}

export default changeSearchData;