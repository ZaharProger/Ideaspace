import initialState from './initialState.js';

const changeState = (state=initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default changeState;