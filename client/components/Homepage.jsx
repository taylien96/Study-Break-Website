import React, { Component } from 'react';
import * as ReactDOM from 'react-dom'
import Heading from './Head.jsx'
import Buttons from './Buttons.jsx';

import { Provider } from 'react-redux'
import store from '../store.js'
const Homepage = props => {
    //maybe render issue here
    
    return(
        <div id="homepage">
        <Provider store={store}>
        <div>
        <Heading/>
        </div>
        <div>
        <Buttons/>
        </div>
        </Provider>
        </div>
    )
  };
 export default Homepage