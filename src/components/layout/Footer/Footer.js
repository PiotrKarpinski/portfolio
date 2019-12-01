import React from 'react';
import styles from './Footer.module.scss';
import './theme.scss';




const Footer = ({color}) => (

<div className={styles.component}>
<p className={styles.text}>Porftolio coded by PGM Karpinski <i className='fa fa-registered' /> All rights reserved </p>
<ul className={styles.links}>
<li style={{display: 'inline'}} ><a className={styles.icon} href='#'><i className='fa fa-github' /></a></li>
<li style={{display: 'inline'}}><a className={styles.icon} href='#'><i className='fa fa-linkedin-square' /></a></li>
</ul>
</div>)


export default Footer;
