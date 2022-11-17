import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../store.js'
import SignUp from './SignUp.jsx';
const SignUpProvider = props => {
    //maybe render issue here
    
    return(
        
        <Provider store={store}>
       <SignUp/>
        </Provider>
        
    )
  };
 export default SignUpProvider