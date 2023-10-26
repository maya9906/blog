import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../css/header.css';
import '../css/home.css';
import UserIcon from '../imgs/user.png';

function Header() {
  return (
    <header>
      <div className='header'>
        <h2 className='logo'>
          monologue
        </h2>
        <div className='options'>
          <p>Home</p>
          <p>Blog</p>
          <p>About</p>
        </div>
        <div className='user'> 
          <img src={UserIcon} className='userimg' alt="Home" />
          <p>Maya Sato</p>
        </div>
      </div>
      <div className='line'/>

    </header>
    
  );
}

export default Header;
