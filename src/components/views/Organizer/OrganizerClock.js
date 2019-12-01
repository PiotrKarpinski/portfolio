import React from 'react';
import styles from './Organizer.module.scss';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom';
import './theme.scss';


class OrganizerClock extends React.Component {

  render() {
    const {barColor, duration, color} = this.props
    const circleStyle = {background: 'conic-gradient('+ barColor +' '+ (duration)*15 +'deg '+(duration)*15 + 'deg, #fff ' + (duration)*15 + 'deg 360deg'}
    console.log(circleStyle)


return(  

  <div className={styles.component}>
    <h2 className={styles.title}>Organizer</h2>
    <div className={`main ${color}`}>


    <div className={styles.circle} style={circleStyle}>    
    <p style = {{ textAlign: 'center',color: 'black'}} className={styles.top}>12</p>
    <p style = {{ float:'left',color: 'black'}} className={styles.right}>3</p>
    <p style = {{ float:'right',color: 'black'}} className={styles.bottom}>6</p>
    <p style = {{ textAlign: 'center',color: 'black'}} className={styles.left}>9</p>
        <div className={styles.innerCircle}>              
      	<Link className={styles.link} to ={`${process.env.PUBLIC_URL}/projects/organizer/add`}></Link>
        <p className={styles.addLink}>Click!</p>
        
        </div>
      </div>
    </div>
    <Button text='fa fa-level-up'/>
  </div>

	)}};

export default OrganizerClock;