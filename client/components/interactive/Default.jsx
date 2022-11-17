import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
//import * as actions from '../actions/actionTypes.js';
//import store from '../store.js';

const Default = props => {
    //maybe render issue here
   
    
    return(
      <div id="container">
    <p>Please select a relaxing experience</p>
    </div>)
  };
  
  
  //export default connect(mapStateToProps)(Default)
  export default Default