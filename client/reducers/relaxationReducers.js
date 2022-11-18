import * as types from '../actions/actionTypes';

const initialState = {
    loggedIn: false,
    username: '',
    whichGraphic: 1,
    bubbleColor: 'aquamarine',
    favPokemon: 'pikachu'
};

const relaxationReducers = (state = initialState, action) => {
    switch (action.type) { 
        case types.LOG_IN:
            return {
                ...state,
                bubbleColor: action.payload.info.colorprefrence,
                favPokemon: action.payload.info.favPokemon,
                loggedIn: true,
                username: action.payload.info.username
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
            case types.POKE:
            return{
                ...state,
                favPokemon : action.payload.poke
            }
    }
}
export default relaxationReducers;
