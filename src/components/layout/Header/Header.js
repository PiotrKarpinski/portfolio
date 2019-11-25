import React from 'react';
import styles from './Header.module.scss';


const Header = () => (
  <div className={styles.component}>
    <div className={styles.image}>
      <h1 className={styles.title}>My portfolio</h1>
    </div> 
  </div>
);


export default Header;