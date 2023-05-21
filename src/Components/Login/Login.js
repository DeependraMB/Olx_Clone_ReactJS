import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { firebaseContext } from '../../store/firebaseContext';
import { useHistory,Link } from 'react-router-dom';

function Login() {
  const history = useHistory()
  const {Firebase} =useContext(firebaseContext)
  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  
  const handleLogin = (e) =>{
    e.preventDefault()
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src='https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png'></img>
        <form onClick={handleLogin}>
          
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
            placeholder='Email'

          />
          <br />
          
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
            placeholder='Password'
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <div className='no-account'>
           Don't have an account?       
        </div>
        <div className='signup-link-in-form'>
           <Link   to="/signup">SignUp</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
