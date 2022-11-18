import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '/Users/taylien/githubDir/solo-Coding-Project/client/actions/actions.js'
//import * as actions from '../actions/actionTypes.js';

const mapStateToProps = state => (
  {
      color: state.relax.bubbleColor,
  }
); 
const Visuals = props => {
    //maybe render issue here
    console.log(props.color)
    const dispatch = useDispatch();
    let colorValue = ''
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
  let start = 0;
  const changeColor = x => {
    if(start > 1){
    colorValue = document.getElementById('color-select').value;
    dispatch(actions.bColorActionCreator(colorValue))}
    else {
      start = !start
    }
  }
    return(
      
    <div id="bubble-wrapper">
      <div className='centered'>
        <div><select onChange={changeColor} placeholder="pick a color" id="color-select">
    <option value="aquamarine">Aqua</option>
    <option value="rgb(194, 89, 194)">Purple</option>
    <option value="whitesmoke">White</option>
    <option value="rgb(121, 36, 36)">Maroon</option>
    <option value="thistle">Light pink</option>
   
</select><button>Save color</button></div>
        <p >follow the ball</p><div className='ball'></div></div>
    </div>)
  };
  
  
  export default connect(mapStateToProps)(Visuals)
