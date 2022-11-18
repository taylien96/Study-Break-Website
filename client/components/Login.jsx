import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import {Link} from "react-router-dom"
/* const mapStateToProps = state => (
    {}
  ); */
  
    const Login = props => {
    //maybe render issue here
    const dispatch = useDispatch();
    let userValue= '';
    let passwordValue = '';
    const updateUsername = (event)=>{
        // show the user input value to console
        userValue = event.target.value;
       
        // console.log(userValue);
      };
      const updatePassword = (event)=>{
        // show the user input value to console
        passwordValue = event.target.value;
        
        // console.log(userValue);
      };
      const loginFunction = () =>{
        let data = { username : userValue, password : passwordValue}
    fetch('/SignUp/login/',{method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((data) => {
        if(data.loginin.error){
          alert("Wrong Username or Password");
        }
        if(data.loginin.made){
          console.log(data.loginin.made)
          dispatch(actions.loginActionCreator(data.loginin.made[0]))
        }})
        /*if(userValue === 'taylor' && passwordValue === 'taylor'){
          console.log(userValue)
          dispatch(actions.usernameActionCreator(userValue))
          dispatch(actions.loginActionCreator());
        }*/
      }
      
    return(
    <div id="login">
        
        <div>
        <p>Username:</p><input className="loginInput" type='text' onChange={updateUsername} placeholder='username' id="username"></input>
        <p>Password:</p><input className="loginInput" type='password' onChange={updatePassword} placeholder='password' id="password"></input>
        </div>
        <div>
        <button onClick={loginFunction} type="button">Login!</button>

        <Link to="/SignUp"><button  type="button">Sign up!</button></Link>
        </div>
    </div>)
  };
  /*
  const Login = props => {
    //maybe render issue here
    
    return(
    <div id="login">
        
        <div>
        <p>Username:</p><input class="loginInput" type='text' placeholder='username' id="username"></input>
        <p>Password:</p><input class="loginInput" type='text' placeholder='password' id="password"></input>
        </div>
        <div>
        <button type="button">Login!</button>
        </div>
    </div>)
  }; */

  //export default connect(mapStateToProps)(Login)
  export default Login