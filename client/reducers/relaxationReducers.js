import * as types from '../actions/actionTypes';

const initialState = {
    loggedIn: false,
};

const relaxationReducers = (state = initialState, action) => {
    switch (action.type) { 
        case types.LOG_IN:
            return {
                ...state,
                loggedIn: true,
              };
              default: {
                return state;
              }
    }
}
export default relaxationReducers;
