import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actionTypes.js';

 
 
  const Loggedin = props => {
    //maybe render issue here
    
    return(
    <div id="userLoggedIn">
     <p>You're logged in {props.user}!</p>
    </div>)
  };
  
  
  //export default connect(mapStateToProps)(Loggedin)
  export default Loggedin