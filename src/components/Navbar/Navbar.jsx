import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Hidden,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

function NavBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#97263A' }}>
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link
            href="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            MK
          </Link>
        </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Hidden smDown>
            <Link
              href="/chat/chatbotai"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '50px',
                fontFamily: 'Raleway',
              }}
            >
              AI Chatbot
            </Link>
            <Link
              href="#link2"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '50px',
                fontFamily: 'Raleway',
              }}
            >
              Resume
            </Link>
            <Link
              href="#link3"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '50px',
                fontFamily: 'Raleway',
              }}
            >
              Portfolio
            </Link>
            <a
              href="#link4"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '50px',
                fontFamily: 'Raleway',
              }}
            >
              Interests
            </a>
          </Hidden>
        </Typography>
        <Avatar
          alt="Avatar"
          src="/images/avatar.jpg"
          sx={{
            width: 60,
            height: 60,
            display: 'flex',
            right: '100px',
          }}
        />
        <Hidden mdUp>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
