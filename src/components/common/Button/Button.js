import React from 'react';
import styles from './Button.module.scss';
import {Link} from 'react-router-dom';

const Button = ({text}) => (

  <div className={styles.component}>
    <Link to ={`${process.env.PUBLIC_URL}/`}className={styles.btn}><i className={text}/></Link>
  </div>



	)

export default Button;