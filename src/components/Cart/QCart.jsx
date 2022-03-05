import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import classes from '../ICards.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/slices/slices.actions';

// have to style and make it responsive

// triggering a state change
function mapDispatch(dispatch) {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    }
  };
}

function ICards(props) {
  const { addToCart } = props;

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={props.item.img_url}
          alt="pizza pics"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            price: ₹{props.item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            rating: {props.item.rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            quantity: {props.item.qty}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons_container}>
        <Button
          onClick={() => addToCart(props.item.id)}
          size="small"
          color="primary"
        >
          add to cart
        </Button>
        <Link to={`/cart/id`}>
          <Button size="small" color="primary">
            remove from cart
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default connect(null, mapDispatch)(ICards);
