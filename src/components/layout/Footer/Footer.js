import React from 'react';
import styles from './Footer.module.scss';




const Footer = ({color}) => (

<div className={styles.component}>
<p className={styles.text}>Porftolio coded by PGM Karpinski <i className='fa fa-registered' /> All rights reserved </p>
<div className={styles.links}>
<a className={styles.icon} rel="noopener noreferrer" href='https://github.com/PiotrKarpinski' target="_blank"><i className='fa fa-github' /></a>
<a className={styles.icon} rel="noopener noreferrer" href='https://www.linkedin.com/in/pgmkarpinski/' target="_blank"><i className='fa fa-linkedin-square' /></a>
</div>
</div>)


export default Footer;
