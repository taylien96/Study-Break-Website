import * as types from '../actions/actionTypes';

const initialState = {
    loggedIn: false,
    username: '',
    whichGraphic: 1,
    bubbleColor: 'aquamarine',
    favPokemon: ''
};

const relaxationReducers = (state = initialState, action) => {
    switch (action.type) { 
        case types.LOG_IN:
            return {
                ...state,
                bubbleColor: action.payload.info.colorprefrence,
                favPokemon: action.payload.info.favPokemon,
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
        case types.GRAPHIC:
            return{
                ...state,
                whichGraphic : action.payload.theGraphic
            }
        case types.BUBBLE_COLOR:
            return{
                ...state,
                bubbleColor : action.payload.theColor
            }
    }
}
export default relaxationReducers;
