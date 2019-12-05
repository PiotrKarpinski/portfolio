import React from 'react';
import styles from './Header.module.scss';
import Button from '../../common/Button/Button';
import './theme.scss'
import BackgroundDark from '../../../images/dark.jpg'
import BackgroundFrozen from '../../../images/frozen.jpg'
import BackgroundDefault from '../../../images/default.jpg'

function changeBackground(theme) {
	var style
	switch(theme) {
		case 'frozen':
         style = { backgroundImage: `url(${BackgroundFrozen}` }
        break;
		case 'dark':
          style = { backgroundImage: `url(${BackgroundDark}` }
        break;
        default:
          style = { backgroundImage: `url(${BackgroundDefault}` }

	}
	return style;
}

const Header = ({color}) => (
  <div className={styles.component}>

    <div className={`image ${color}`} style={ changeBackground(color) }> 
    <div className={styles.header}>
  <h1 className={styles.title}>PORTFOLIO PAGE</h1>
  <h2 className={styles.subtitle}>Click below to download my CV</h2>
  </div>
    <div className={styles.download}>
       <Button text='fa fa-download' />
    </div>
    
    </div> 
  </div>
);


export default Header;