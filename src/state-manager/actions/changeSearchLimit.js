import { SEARCH_LIMIT } from "../stateConstants";

const changeSearchLimit = (searchLimit) => {
    return {
        type: SEARCH_LIMIT,
        search_limit: searchLimit
    }
}

export default changeSearchLimit;