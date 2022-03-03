import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Cards() {
  const url = 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68';
  const [piz, setPiz] = useState({
    data: null,
    error: false
  });

  let innerdata = 'checking';

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

  // have to create a good looking template for the respective item
  if (piz.data) {
    innerdata = piz.data.map(function (item, key) {
      return (
        <div>
          name: {item.name} <br /> price: {item.price} <br />
        </div>
      );
    });
  }

  return (
    <>
      <div>
        <h3>pizzas in town</h3>
      </div>
      <div>{innerdata}</div>
    </>
  );
}

export default Cards;
