import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actionTypes.js';
import Login from './Login.jsx'
import Loggedin from './Loggedin.jsx'
import store from '../store.js';
 const mapStateToProps = state => (
    {
        Loggedin: state.relax.loggedIn
    }
  ); 
  const Heading = props => {
    //maybe render issue here
    const output = [];
    if(props.Loggedin){
        output[0] = <Loggedin key="boop" />
    }
    else{
        output[0] = <Login key="loop" />
    }
    
    return(
    <div id="title">
        <p id="welcome">Welcome To Rest and Relaxation</p>
        {output}
    </div>)
  };
  
  
  //export default connect(mapStateToProps)(Heading)
  export default Heading