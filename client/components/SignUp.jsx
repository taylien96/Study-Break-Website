import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { Provider } from 'react-redux'
import store from '../store.js'
 
 
const SignUp = props => {
    //maybe render issue here
    const dispatch = useDispatch();
    let userValue = '';
    let passwordValue = '';
    const updateUsername1 = (event)=>{
        // show the user input value to console
        userValue = event.target.value;
        dispatch(actions.usernameActionCreator(userValue))
        // console.log(userValue);
      };
      const updatePassword1 = (event)=>{
        // show the user input value to console
        passwordValue = event.target.value;
        console.log(passwordValue)
        // console.log(userValue);
      };
      const createUser = () => {
    let data = {username : userValue, password : passwordValue}
    fetch('/SignUp/',{method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((data) => {
        if(data.signin.error){
          alert("Username already taken");
        }
        if(data.signin.made){
          window.location.href = '/'
        }
        
      })
    }
    return(
        <Provider store={store}>
        <div id="signup">
            <div>
        <p>Username:</p><input className="loginInput" type='text' onChange={updateUsername1} placeholder='username' id="username1"></input>
            </div>
            <div>
        <p>Password:</p><input className="loginInput" type='password' onChange={updatePassword1} placeholder='password' id="password"></input>
        </div>
        <div>
        <button onClick={createUser}>Sign up!</button>
        </div>
        </div>
        </Provider>)
  };
  
  
  //export default connect(mapStateToProps)(Loggedin)
  export default SignUp