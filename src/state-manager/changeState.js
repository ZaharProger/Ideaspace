import initialState from './initialState.js';

import { USER_DATA } from './stateConstants';

const changeState = (state=initialState, action) => {
    switch (action.type){
        case USER_DATA:
            return{
                ...state,
                user_data: action.user_data
            }
        default:
            return state;
    }
}

export default changeState;