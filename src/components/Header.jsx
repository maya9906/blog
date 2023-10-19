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
        <img src={UserIcon} alt="Home" />
          <p>Maya Sato</p>
        </div>
      </div>
      <div className='line'/>

    </header>
    // <AppBar position="static">
    //     <Toolbar>
    //         {/* ロゴ */}
    //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //           BLOG GO
    //         </Typography>

    //         {/* ナビゲーションメニュー */}
    //         <Button color="inherit">Home</Button>
    //         <Button color="inherit">Blog</Button>

    //         {/* サインアップとログインボタン */}
    //         <Button color="inherit">Sign Up</Button>
    //         <Button color="inherit">Login</Button>
    //     </Toolbar>
    // </AppBar>
  );
}

export default Header;
