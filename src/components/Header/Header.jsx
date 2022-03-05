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
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function ValUpd(state) {
  return {
    cart: state.shop.cart
  };
}

function Header({ cart }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let x = 0;
    cart.map((i) => (x += i.qty));
    setCount(x);
  }, [cart, count]);

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
              <Link to="/">
                <LocalPizzaIcon />
              </Link>
            </Typography>
            <Button color="inherit">
              <Link to="/cart">
                {count} <ShoppingCartIcon />
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default connect(ValUpd)(Header);
