import React from 'react';
import styles from './Projects.module.scss';
import {Link} from 'react-router-dom';

const Projects = (props) => (

 
    
 


  <div className={styles.wrapper}>
 	<div className={styles.row} >
  	<div className={styles.box}>
    <Link className={styles.link} to ={`${process.env.PUBLIC_URL}/projects/calculator`}>CALCULATOR</Link>
    </div>
    <div className={styles.box}>
	<Link className={styles.link} to ={`${process.env.PUBLIC_URL}/projects/photoshop`}>PHOTOSHOP</Link>
	</div>
	</div>
	<div className={styles.row}>
	<div className={styles.box}>
	<Link className={styles.link} to ={`${process.env.PUBLIC_URL}/projects/organizer`}>ORGANIZER</Link>
	</div>
	<div className={styles.box}>
	<Link  className={styles.link} to ={`${process.env.PUBLIC_URL}/projects/audio`}>AUDIO</Link>
	</div>
    </div>
    </div>

	)

export default Projects;