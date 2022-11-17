import React, { Component } from 'react';
import * as ReactDOM from 'react-dom'
import './scss/App.scss'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage.jsx';
import SignUpProvider from './components/SignUpProvider.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/SignUp' element={<SignUpProvider/>} />
                </Routes>
                
            </Router>
            
        )
    }
}
export default App;