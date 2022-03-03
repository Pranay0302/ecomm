import React from 'react';
import classes from './Header.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

function Header() {
  return (
    <div className={classes.h_container}>
      {/* <h3>STORE LISTING ASSIGNMENT</h3>
          <small>assignment given by treflo</small> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <LocalPizzaIcon />
            </Typography>
            <Button color="inherit">
              <ShoppingCartIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
