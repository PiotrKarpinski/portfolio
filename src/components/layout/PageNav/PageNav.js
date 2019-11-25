import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './PageNav.module.scss';
import {showBar, hideBar} from '../../features/showHide'


let bar = React.createRef()



function handleClick() {
	

	bar.current.classList.contains('show') ?
	hideBar(bar.current) : showBar(bar.current)
	bar.current.classList.toggle('show');
    
	}



const PageNav = () => (
  <nav className={styles.component}>
	 <NavLink exact to = {`${process.env.PUBLIC_URL}/`} className={styles.link} activeClassName='active'>HOME</NavLink>
     <NavLink exact to = {`${process.env.PUBLIC_URL}/projects/`} onClick={event => handleClick()}className={styles.link} activeClassName='active'>PROJECTS</NavLink>
     <NavLink exact to= {process.env.PUBLIC_URL + '/contact'}className={styles.link} activeClassName='active'>CONTACT</NavLink>      

       <nav className={styles.projects} ref={bar}>
				    
		<Link to ={`${process.env.PUBLIC_URL}/projects/calculator`}className={styles.link}>CALCULATOR</Link>
		<Link to ={`${process.env.PUBLIC_URL}/projects/photoshop`}className={styles.link}>PHOTOSHOP</Link>
		<Link to ={`${process.env.PUBLIC_URL}/projects/departure`}className={styles.link}>DEPARTURE</Link>
		<Link to ={`${process.env.PUBLIC_URL}/projects/audio`}className={styles.link}>AUDIO</Link>
		 <a onClick={event => hideBar(bar.current)} className={styles.arrow}>			   	
         <i className='fa fa-angle-double-up'></i>
         </a>
		</nav>
	
  </nav>
);


export default PageNav;
