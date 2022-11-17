import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import store from '../store.js';

const Buttons = props => {
    //maybe render issue here
   let dispatch = useDispatch();
   const visClick = ()=> {
    dispatch(actions.graphicActionCreator(2))
   }
   const pokeClick = ()=>{
    dispatch(actions.graphicActionCreator(3))
   }
    
    return(
    <div id="buttons">
        <button onClick={visClick} className='navBut'>Interactive Visuals</button>
        <button onClick={pokeClick} className='navBut'>Pokemon</button>
    </div>)
  };
  
  
  //export default connect(mapStateToProps)(Heading)
  export default Buttons