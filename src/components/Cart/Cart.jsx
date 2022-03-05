import React from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import classes from '../ICards.module.css';
import QCart from './QCart';

function ValState(state) {
  return {
    cart: state.shop.cart
  };
}

function Cart({ cart }) {
  console.log(cart);
  return (
    <>
      <Header />
      <div className={classes.cart_container}>
        <h3>cart items</h3>
        {cart.length === 0 ? (
          <h5>
            Sorry, The cart is empty. <br />
            Please fill in
          </h5>
        ) : (
          <div className={classes.cards_container}>
            {cart.map((item, key) => (
              <QCart item={item} key={key} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default connect(ValState)(Cart);
