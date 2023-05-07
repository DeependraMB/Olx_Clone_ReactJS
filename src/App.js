import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { authContext, firebaseContext } from './store/firebaseContext';

function App() {

  const {user,setUser} = useContext(authContext)
  const {Firebase} =useContext(firebaseContext)
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
      <Router>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/signup'>
        <Signup />
        </Route>
        <Route path='/login'>
        <Login />
        </Route>
        <Route path='/create'>
        <Create />
        </Route>
      </Router>

    </div>
  );
}

export default App;
