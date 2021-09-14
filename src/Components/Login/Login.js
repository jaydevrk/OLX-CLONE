import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Context'
import { useHistory } from "react-router-dom";
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
   const history = useHistory()
   const [Email, setEmail] = useState('')
   const [password, setpassword] = useState('')
   const {firebase} =useContext(FirebaseContext)
   const handlelogin=(e)=>{
     e.preventDefault()
     firebase.auth().signInWithEmailAndPassword(Email,password).then(()=>{
       alert('logged In')
     }).catch((err)=>{
       alert(err)
     })
     history.push('/')

   }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value ={Email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
