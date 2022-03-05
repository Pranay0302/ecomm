import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import classes from '../ICards.module.css';
import Typography from '@mui/material/Typography';

function ValUpd(state) {
  return {
    cart: state.shop.cart
  };
}

function Checkout({ cart }) {
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let items = 0;
    let prices = 0;

    cart.forEach((item) => {
      items += item.qty;
      prices += item.qty * item.price;
    });

    setCount(items);
    setPrice(prices);
  }, [cart, price, count, setPrice, setCount]);

  return (
    <div className={classes.checkout_container}>
      <h2>checkout</h2>
      <Typography gutterBottom variant="h5" component="div">
        total items: {count}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        total price: ₹{price}
      </Typography>
    </div>
  );
}

export default connect(ValUpd)(Checkout);
