import React from 'react';
import 'rc-color-picker/assets/index.css';
import styles from './Organizer.module.scss';
import {Link} from 'react-router-dom';
import TimePicker from 'react-time-picker'
import ColorPicker from 'rc-color-picker';
import './theme.scss';
import Icon from '../../common/Icon/Icon';



class OrganizerAdd extends React.Component { 
    constructor(props) {
    super(props);
    this.state = {value: {title:'',id:1,daily:false, description:'', time:'',color:'',duration:''}}
    this.add = this.add.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleColor = this.handleColor.bind(this)

    }

    handleChange(event) {
    	this.setState({value: {...this.state.value, [event.target.name]: event.target.value}})

    }
    handleColor = obj => {let barColor = obj.color; this.state.value.color = barColor}


    handleTime = time => this.setState({ value: {...this.state.value, time} })

    add() {
    	this.props.organizer = this.state.value;
    	console.log(this.state.value)
    }

    render() {

    const {addToDo, color} = this.props;
    return (

  <div className={styles.component}>

    <h2 className={styles.title}>Organizer</h2>      
    

    <div className={`main ${color}`}>    
    <Link className={styles.back} to ={`${process.env.PUBLIC_URL}/projects/organizer`}><Icon icon='fa fa-close' /></Link>
      <div className ={styles.form}>
      	<input type='text' name='title'  className={styles.text} onChange={this.handleChange} placeholder='Add title'/>
      	<input type='textarea' name='description' className={styles.text} onChange={this.handleChange} placeholder='Describe your task'/>
      	<input type='checkbox' name='daily' className={styles.daily} onChange={this.handleChange}/>
        <div className={styles.container}>
        <p className={styles.info}>Pick when you start:</p>
        <TimePicker className={styles.time} onChange={this.handleTime} disableClock={true} value='00:00' clearIcon={null} />
        <p className={styles.info}>Set how many hours will it take:</p>
        <input type='number' name='duration' className={styles.duration} onChange={this.handleChange} placeholder='0'/>
        <p className={styles.info}>And choose your task color:</p>
    <ColorPicker
      color={'#36c'}
      alpha={100}
      onChange={this.handleColor}
      
      placement="bottomLeft"
      className={styles.colorPicker}
    >
      <span className="rc-color-picker-trigger" />
    </ColorPicker>        
    </div>        

      </div>
     <Link className={styles.add} to ={`${process.env.PUBLIC_URL}/projects/organizer`} onClick={e => 
       {addToDo(this.state.value)}}><Icon icon='fa fa-plus' /></Link>
          </div>
 
  </div>

	)
  }
}

export default OrganizerAdd;