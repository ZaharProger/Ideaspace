import initialState from './initialState.js';

import { PROFILE_DATA, FOUND_USER_PROFILE_DATA,  SEARCH_DATA, SEARCH_LIMIT, END_INDEX, MENU_STATUS } from './stateConstants';

const changeState = (state=initialState, action) => {
    switch (action.type){
        case PROFILE_DATA:
            return {
                ...state,
                profile_data: action.profile_data
            }
        case FOUND_USER_PROFILE_DATA:
            return {
                ...state,
                found_user_profile_data: action.found_user_profile_data
            }
        case SEARCH_DATA:
            return {
                ...state,
                search_data: action.search_data
            }
        case SEARCH_LIMIT:
            return {
                ...state,
                search_limit: action.search_limit
            }
        case END_INDEX:
            return {
                ...state,
                end_index: action.end_index
            }
        case MENU_STATUS:
            return {
                ...state,
                menu_status: action.menu_status
            }
        default:
            return state;
    }
}

export default changeState;