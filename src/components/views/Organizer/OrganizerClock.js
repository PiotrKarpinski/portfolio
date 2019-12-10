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

    function mapClock() {

        var degree
          degree = start*15;
      
      return degree
    }

    function checkColor() {
     if (start + (duration)*1 > 24) {
           var colorFirst = barColor
        }
        else {
        colorFirst = '#fff';
      }
        return colorFirst;
      }
    function checkSecondColor() {
     if (start + (duration)*1 < 24) {
           var colorSecond = barColor
        }
        else {
        colorSecond = '#fff';
      }
        return colorSecond;
      }
    function checkStop() {
     if (start + (duration)*1 > 24) {
           var Stop = (start + (duration)*1 - 24)*15
        }
        else {
        Stop = mapClock();
      }
        return Stop;
      }
    function checkEnd() {
      var deg 
    if (start + (duration)*1 > 24) {
       deg = start*15 
      }
      else {
        deg = (mapClock()+(duration)*15)
      }
      return deg;
    }

    const circleStyle = {background: 'conic-gradient('+checkColor()+' '+'0deg+'+checkStop()+'deg, '
    + checkSecondColor()  +' '+ checkStop() +'deg '+checkEnd() + 'deg,'+ checkColor() +' ' +checkEnd()+ 'deg 360deg'}
    console.log(circleStyle)



return(  

  <div className={styles.component}> 
  <h2 className={styles.title}>Organizer</h2>
  <div className={styles.row}>
   
    <div className={`main ${color}`}>


    <div className={styles.circle} style={circleStyle}>    
    <p style = {{ textAlign: 'center',color: 'black'}} className={styles.top}>24</p>
    <p style = {{ float:'left',color: 'black'}} className={styles.right}>6</p>
    <p style = {{ float:'right',color: 'black'}} className={styles.bottom}>12</p>
    <p style = {{ textAlign: 'center',color: 'black'}} className={styles.left}>18</p>
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