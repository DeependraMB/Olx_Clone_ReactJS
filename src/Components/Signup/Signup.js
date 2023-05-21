import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { firebaseContext } from '../../store/firebaseContext';
import { Link, useHistory } from 'react-router-dom';


export default function Signup() {
 
  const history = useHistory()
  const {Firebase} =useContext(firebaseContext)
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    Firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        Firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push("/login")
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src='https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png' alt='logo'></img>
        <form onClick={handleSubmit}>
          
          <br />
          <input
            className="input"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text"
            id="fname"
            name="name"
           placeholder='username'
          />
          <br />
          
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
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            type="number"
            id="lname"
            name="phone"
            placeholder='Phone'
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
          <button>Signup</button>
        </form>
        <div className='already-acc'>
        
          Already a member? 
          
        </div>
        <div className='login-link'>
        <Link to="/login" > 
               Login
          </Link>
        </div>
      </div>
    </div>
  );
}
