import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import store from '../store.js';
import * as actions from '../actions/actionTypes.js';
import Default from './interactive/Default.jsx';
import Pokemon from './interactive/Pokemon.jsx';
import Visuals from './interactive/Visuals.jsx';

const mapStateToProps = state => (
    {
        graphic: state.relax.whichGraphic,
    }
  ); 
  const Interactive = props => {
    //maybe render issue here
    console.log('hello')
    console.log(props.graphic)
    const output = [];
    if(props.graphic === 1){
        output[0] = <Default key="lar"/>
    }
    else if(props.graphic === 2){
        output[0] = <Visuals key="ar" />
    }
    else if(props.graphic === 3){
        output[0] = <Pokemon key="arp" />
    }
    return(
    <div id="content">
        {output}
    </div>)
  };
  
  
  export default connect(mapStateToProps)(Interactive)
