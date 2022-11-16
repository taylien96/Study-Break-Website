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
 