import React from 'react';
import styles from './Organizer.module.scss';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom';

const Organizer = () => (

  <div className={styles.component}>
    <h2>Organizer</h2>
    <div className={styles.main}>

      <div className={styles.circle}>
        <div className={styles.innerCircle}>              
      	<Link className={styles.link} to ={`${process.env.PUBLIC_URL}/projects/organizer/add`}></Link>
        <p className={styles.text}>Add something!</p>
        
        </div>
      </div>
    </div>
    <Button text='Go back' />
  </div>

	)

export default Organizer;