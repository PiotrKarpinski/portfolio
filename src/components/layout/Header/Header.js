import React from 'react';
import styles from './Header.module.scss';
import './theme.scss'
import BackgroundDark from '../../../images/dark.jpg'
import BackgroundFrozen from '../../../images/frozen.jpg'
import BackgroundDefault from '../../../images/default.jpg'
import Icon from '../../common/Icon/Icon';



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
  <header className={styles.component}>

    <div className={`image ${color}`} style={ changeBackground(color) }> 
  <h2 className={styles.title}>Click below to download my CV</h2>
    <div className={styles.download}>
       <a href='https://docdro.id/lHwQWRm' target='_blank' rel="noopener noreferrer" className={styles.link}>
       <Icon icon='fa fa-download' /></a>
    </div>
    
    </div> 
  </header>
);


export default Header;