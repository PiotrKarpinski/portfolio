import React from 'react';
import styles from './Home.module.scss';
import About from '../About/AboutContainer';
import Header from '../../layout/Header/HeaderContainer';
import Footer from '../../layout/Footer/FooterContainer';




const Home = (props) => (

  <div className={styles.component}>
    <Header />

    <About />

	<div className={styles.projects}>
	
	{props.children}
    </div>
  

  <Footer />
  </div>
 

	)

export default Home;