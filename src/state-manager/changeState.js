import initialState from './initialState.js';

import { USER_DATA, SEARCH_DATA } from './stateConstants';

const changeState = (state=initialState, action) => {
    switch (action.type){
        case USER_DATA:
            return {
                ...state,
                user_data: action.user_data
            }
        case SEARCH_DATA:
            return {
                ...state,
                search_data: action.search_data
            }
        default:
            return state;
    }
}

export default changeState;