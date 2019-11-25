import React from 'react';
import styles from './Home.module.scss';
import Header from '../../layout/Header/Header';
import Projects from '../../views/Projects/Projects';
import About from '../About/About';
import {Link} from 'react-router-dom';
import {showBar, hideBar} from '../../features/showHide';



let projects = React.createRef()


function handleClick() {
	

	projects.current.classList.contains('show') ?
	hideBar(projects.current) : showBar(projects.current)
	projects.current.classList.toggle('show');
    
	}

const Home = (props) => (

  <div className={styles.component}>
    <Header />
    <About />

    <Link to = {`${process.env.PUBLIC_URL}/projects`} onClick = {event => handleClick()} className={styles.btn}>PROJECTS</Link>

	<div ref={projects} className={styles.projects}>
	</div>
	
    {props.children}
    


  </div>
 

	)

export default Home;