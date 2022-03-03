import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import classes from './ICards.module.css';

// have to style and make it responsive

function ICards(props) {
  return (
    <Card sx={{ maxWidth: 300 }} className={classes.ic_container}>
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ICards;
