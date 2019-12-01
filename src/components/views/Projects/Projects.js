import React from 'react';
import styles from './Projects.module.scss';
import {Link} from 'react-router-dom';
import './theme.scss';

const Projects = ({color}) => (

 

  <div className={`wrapper ${color}`}>
  <h1 className={styles.title}>MY PROJECTS:</h1>
 	<div className={styles.row} >
  	<div className={styles.box}>
    <Link className={styles.link} to ={`${process.env.PUBLIC_URL}/projects/calculator`}>CALCULATOR<br/><i className='icon fa fa-calculator'/></Link>
   
    </div>
	
	<div className={styles.box}>
	<Link className={styles.link} to ={`${process.env.PUBLIC_URL}/projects/organizer`}>ORGANIZER<br/><i className='icon fa fa-calendar'/></Link>

    </div>
    </div>
    </div>
	)

export default Projects;