import React from 'react';
import styles from './Organizer.module.scss';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom';



class OrganizerClock extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const {color, duration} = this.props
    const circleStyle = {background: 'conic-gradient('+ color +' '+ (duration)*15 +'deg '+(duration)*15 + 'deg, #fff ' + (duration)*15 + 'deg 360deg'}
    console.log(circleStyle)


return(  

  <div className={styles.component}>
    <h2>Organizer</h2>
    <div className={styles.main}>

      <div className={styles.circle} style={circleStyle}>
        <div className={styles.innerCircle}>              
      	<Link className={styles.link} to ={`${process.env.PUBLIC_URL}/projects/organizer/add`}></Link>
        <p className={styles.text}>Add something!</p>
        
        </div>
      </div>
    </div>
    <Button text='Go back' />
  </div>

	)}};

export default OrganizerClock;