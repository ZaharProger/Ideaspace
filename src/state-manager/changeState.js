import initialState from './initialState.js';

import { PROFILE_DATA, FOUND_USER_PROFILE_DATA,  SEARCH_DATA, MENU_STATUS, POST_DATA, FOUND_POST } from './stateConstants';

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
        case POST_DATA:
            return {
                ...state,
                post_data: action.post_data
            }
        case MENU_STATUS:
            return {
                ...state,
                menu_status: action.menu_status
            }
        case FOUND_POST:
            return {
                ...state,
                found_post: action.found_post
            }
        default:
            return state;
    }
}

export default changeState;