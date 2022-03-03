import React from 'react';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import classes from './Home.module.css';
import Cards from '../Cards';

function Home() {
  return (
    <div>
      <Header />
      <Cards />
      {/* <footer className={classes.footer}>
        <Footer />
      </footer> */}
    </div>
  );
}

export default Home;
