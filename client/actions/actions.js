import * as types from './actionTypes';

export const loginActionCreator = () => ({
    type: types.LOG_IN,
    
  });
  export const usernameActionCreator = (username) => ({
    type: types.USERNAME,
    payload: {
        user : username
      }
  });
  export const graphicActionCreator = (type) => ({
    type: types.GRAPHIC,
    payload: {
        theGraphic : type
      }
  });
 