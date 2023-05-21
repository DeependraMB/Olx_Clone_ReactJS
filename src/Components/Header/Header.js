import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { authContext, firebaseContext } from '../../store/firebaseContext';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
function Header() {
  const history = useHistory();
  const {user} =useContext(authContext)
  const {Firebase} =  useContext(firebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {
        user ? <Avatar/> : <span className='navLogin' onClick={()=>{history.push("/login")}}>Login</span>
        }
       
        <div className="sellMenu" >
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link className='sellButton' to="/create">SELL</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
