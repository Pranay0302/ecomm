import React from 'react';
import { Box } from '@mui/material';
import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.f_container}>
      <Box
        sx={{
          width: '100%',
          height: '80px',
          backgroundColor: 'primary.dark'
        }}
      >
        <p>treflo &copy; All rights reserved, {new Date().getFullYear()}.</p>
      </Box>
    </footer>
  );
}

export default Footer;
