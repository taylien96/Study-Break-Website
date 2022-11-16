import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actionTypes.js';

 
 
  const Loggedin = props => (
    //maybe render issue here
    
    <div id="userLoggedIn">
     <p>You're logged in! </p>
    </div>
  );
  
  
  //export default connect(mapStateToProps)(Loggedin)
  export default Loggedin