import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ICards from './ICards';
import classes from './ICards.module.css';
import { connect } from 'react-redux';

function mapState(state) {
  return {
    pizzas: state.shop.pizzas
  };
}

function Cards() {
  const url = 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68';
  const [piz, setPiz] = useState({
    data: null,
    error: false
  });

  let innerdata = null;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setPiz({
          data: resp.data,
          error: false
        });
      })
      .catch(() => {
        setPiz({
          data: null,
          error: true
        });
      });
  }, [url]);

  if (piz.error) {
    innerdata = <p>error encountered, please come again later</p>;
  }

  if (piz.data) {
    innerdata = piz.data.map(function (item, key) {
      return (
        <div>
          <ICards item={item} key={key} />
        </div>
      );
    });
  }

  return (
    <>
      <div>
        <h3>pizzas in town</h3>
      </div>
      <div className={classes.cards_container}>{innerdata}</div>
    </>
  );
}

export default connect(mapState)(Cards);
