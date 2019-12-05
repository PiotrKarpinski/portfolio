import React from 'react';
import styles from './Organizer.module.scss';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom';
import './theme.scss';


class OrganizerClock extends React.Component {

  render() {    

    function hourToNumber(hour) {

      const parts = hour.split(':');

      return parseInt(parts[0]) + parseInt(parts[1])/60;
    }

    const {barColor, duration, color, title, time, description} = this.props;
    const start = hourToNumber(time)

    function mapClock(time) {
        console.log(time)
        var degree
        if (time>12) {
          time=time-12
        }
       switch(time) {
    case 0:
         degree =  0 
        break;
    case 12:
         degree =  0 
        break;

        default:
          degree = time*30;

  }

      
      return degree
    }

   


    const circleStyle = {background: 'conic-gradient(#fff 0deg+'+mapClock(start)+'deg, '+ barColor +' '+ mapClock(start) +'deg '+(mapClock(start)+(duration)*30) + 'deg, #fff ' +(mapClock(start)+(duration)*30)+ 'deg 360deg'}
    console.log(circleStyle)



return(  

  <div className={styles.component}> 
  <h2 className={styles.title}>Organizer</h2>
  <div className={styles.row}>
   
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

    <div className={`task ${color}`}>
    <div className={styles.info}>
    <p className={styles.taskInfo}>
    Title: {title}
    </p>
    <p className={styles.taskInfo}>
    Description: {description}
    </p>
    <p className={styles.taskInfo}>
    When You start: {time}
    </p>
    <p className={styles.taskInfo}>
    How long will it take: {duration}
    </p>
    <p className={styles.barColor} style={{backgroundColor: barColor}}>
    
    </p>

    </div>
    </div>
    </div>
    <Button text='fa fa-level-up'/>


  </div>

	)}};

export default OrganizerClock;