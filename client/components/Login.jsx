import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actionTypes.js';

/* const mapStateToProps = state => (
    {}
  ); */
  const Login = props => (
    //maybe render issue here
    
    <div id="login">
        
        <div>
        <p>Username:</p><input id="username"></input>
        <p>Password:</p><input id="password"></input>
        </div>
        <div>
        <button type="button">Login!</button>
        </div>
    </div>
  );
  
  
  //export default connect(mapStateToProps)(Login)
  export default Login