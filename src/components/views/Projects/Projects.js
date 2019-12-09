import React from 'react';
import styles from './Projects.module.scss';
import {Link} from 'react-router-dom';
import './theme.scss';

const Projects = ({color}) => (

 

  <div className={`wrapper ${color}`}>
  <h1 className={styles.title}>MY PROJECTS:</h1>
 	<div className={styles.row} >
  	<div className={styles.box}>
    <Link className='link calculatorLink' to ={`${process.env.PUBLIC_URL}/projects/calculator`}><div className={styles.name}>CALCULATOR</div></Link>
   
    </div>
	
	<div className={styles.box}>
	<Link className='link organizerLink' to ={`${process.env.PUBLIC_URL}/projects/organizer`}><div className={styles.name}>ORGANIZER*</div> 
</Link>*Does not work on Microsoft Edge, Firefox and Internet Explorer
    </div>
    </div>
    </div>
	)

export default Projects;