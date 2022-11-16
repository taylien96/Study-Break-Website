import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actionTypes.js';

/* const mapStateToProps = state => (
    {}
  ); */
  const Loggedin = props => (
    //maybe render issue here
    
    <div id="login">
     <p>You're logged in!</p>
    </div>
  );
  
  
  //export default connect(mapStateToProps)(Heading)
  export default Loggedin