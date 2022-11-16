import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actionTypes.js';
import store from '../store.js';

const Buttons = props => {
    //maybe render issue here
   
    
    return(
    <div id="buttons">
        <button className='navBut'>Interactive Visuals</button>
        <button className='navBut'>Pokemon</button>
    </div>)
  };
  
  
  //export default connect(mapStateToProps)(Heading)
  export default Buttons