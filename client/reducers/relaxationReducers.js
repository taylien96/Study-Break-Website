import * as types from '../actions/actionTypes';

const initialState = {
    loggedIn: false,
    username: ''
};

const relaxationReducers = (state = initialState, action) => {
    switch (action.type) { 
        case types.LOG_IN:
            return {
                ...state,
                loggedIn: true,
              };
        case types.USERNAME:
            return{
                ...state,
                username : action.payload.user
            }
              default: {
                return state;
              }
    }
}
export default relaxationReducers;
