import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
//import * as actions from '../actions/actionTypes.js';

const mapStateToProps = state => (
  {
      color: state.relax.bubbleColor,
  }
); 
const Visuals = props => {
    //maybe render issue here
   
   const animateBubble = x => {
    const wrapper = document.getElementById('bubble-wrapper');
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${x}px`;
    bubble.style.backgroundColor = `${props.color}`
    wrapper.appendChild(bubble);
    setTimeout(() => wrapper.removeChild(bubble), 2000);
   }
    window.onmousemove = e => {
      animateBubble(e.clientX)}
    return(
      
    <div id="bubble-wrapper">
      <div className='centered'><p >follow the line</p></div>
    </div>)
  };
  
  
  export default connect(mapStateToProps)(Visuals)
