import React from 'react';
import styles from './Button.module.scss';
import {Link} from 'react-router-dom';
import Icon from '../Icon/Icon';

const Button = ({icon}) => (

  <div className={styles.component}>
    <Link to ={`${process.env.PUBLIC_URL}/`} className={styles.btn}>
    <Icon icon={icon}/></Link>
  </div>



	)

export default Button;