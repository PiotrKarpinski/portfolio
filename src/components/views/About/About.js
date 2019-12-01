import React from 'react';
import styles from './About.module.scss';
import './theme.scss';

const About = ({color}) => (

  <div className={`component ${color}`}>
     
  <div className={styles.wrapper}>
  <h2 className={styles.title}>Hello, my name is<br /> Piotr Karpiński</h2>
  <p className={styles.text}>I am young and promising Front-end Developer with strong basics and constant will to gain more knowledge.<br/>
  Currently, I am looking for work in Wrocław. You can contact with me via email. I also invite You to take a look at my GitHub and LinkedIn profiles.</p>
  </div>
  </div>

)

export default About;