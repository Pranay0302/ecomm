import React from 'react';
import Header from '../Header/Header';
import Cards from '../Cards';
import classes from './Home.module.css';

function Home() {
  return (
    <div>
      <Header />
      <Cards />
      {/* <Footer /> */}
      <footer>
        <div className={classes.footer_container}>
          <p>treflo &copy; All rights reserved, {new Date().getFullYear()}.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
