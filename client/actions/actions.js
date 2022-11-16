import * as types from './actionTypes';

export const loginActionCreator = index => ({
    type: types.LOG_IN,
    
  });
  export const usernameActionCreator = index => ({
    type: types.USERNAME,
    payload: {
        username : username
      }
  });
 