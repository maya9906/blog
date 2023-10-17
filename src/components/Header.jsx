import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
        <Toolbar>
            {/* ロゴ */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                BLOG GO
            </Typography>

            {/* ナビゲーションメニュー */}
            <Button color="inherit">Home</Button>
            <Button color="inherit">Blog</Button>

            {/* サインアップとログインボタン */}
            <Button color="inherit">Sign Up</Button>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
  );
}

export default Header;
