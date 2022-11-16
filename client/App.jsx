import React, { Component } from 'react';
import * as ReactDOM from 'react-dom'
import './scss/App.scss'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage.jsx';
class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Homepage/>
                
            </div>
        )
    }
}
export default App;