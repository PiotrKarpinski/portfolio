import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './PageNav.module.scss';
import {showBar, hideBar} from '../../features/showHide'
import './theme.scss';

let bar = React.createRef()



function handleClick() {
	

	bar.current.classList.contains('show') ?
	hideBar(bar.current) : showBar(bar.current)
	bar.current.classList.toggle('show');
    
	}



const PageNav = ({changeColor,color}) => (

  <nav className={`navbar ${color}`}>
	 <NavLink exact to = {`${process.env.PUBLIC_URL}/`} className={styles.link} activeClassName='active'>HOME</NavLink>
     <NavLink exact to = {`${process.env.PUBLIC_URL}/`} onClick={event => handleClick()}className={styles.link} activeClassName='active'>
     COLOR THEMES<button onClick={event => hideBar(bar.current)}  className={styles.arrow}>			   	
         <i className='fa fa-tint'></i>
         </button></NavLink>

       <nav className={styles.projects} ref={bar}>
       		<Link to ={`${process.env.PUBLIC_URL}/`} onClick={e => 
       {changeColor('default'); console.log(color)}} className={styles.link}>DEFAULT</Link>				    
		<Link to ={`${process.env.PUBLIC_URL}/`} onClick={e => 
       {changeColor('dark'); console.log(color)}} className={styles.link}>DARK</Link>
		<Link to ={`${process.env.PUBLIC_URL}/`} onClick={e => 
       {changeColor('frozen')}} className={styles.link}>FROZEN</Link>
		 
		</nav>
	
  </nav>
);


export default PageNav;
