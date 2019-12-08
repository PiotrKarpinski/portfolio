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
  <h1 className={styles.title}>Click below to download my CV</h1>
  </div>
    <div className={styles.download}>
       <a href='https://docdro.id/lHwQWRm' target='_blank' className={styles.link}><i className='fa fa-download' /></a>
    </div>
    
    </div> 
  </div>
);


export default Header;