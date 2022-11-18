import * as types from './actionTypes';

export const loginActionCreator = (userInfo) => ({
    type: types.LOG_IN,
    payload: {
      info : userInfo
    }
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
export const bColorActionCreator = (color) => ({
  type: types.BUBBLE_COLOR,
  payload: {
    theColor: color
  }
})
 