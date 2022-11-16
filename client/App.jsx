import React, { Component } from 'react';
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import Heading from './components/Head.jsx'
import './scss/App.scss'
import Buttons from './components/Buttons.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Provider store={store}>
                <Heading/>
                <Buttons/>
                </Provider>
            </div>
        )
    }
}
export default App;