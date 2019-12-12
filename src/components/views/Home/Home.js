import React from 'react';
import styles from './Home.module.scss';
import About from '../About/AboutContainer';
import Header from '../../layout/Header/HeaderContainer';




const Home = (props) => (

  <div className={styles.component}>

    <Header />

    <About />

	<section className={styles.projects}>
	{console.log(props)}
	{props.children}
    </section>
  


  </div>

	)

export default Home;