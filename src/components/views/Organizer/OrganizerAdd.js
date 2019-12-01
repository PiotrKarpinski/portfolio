import React from 'react';
import 'rc-color-picker/assets/index.css';
import styles from './Organizer.module.scss';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom';
import TimePicker from 'react-time-picker'
import {Panel as ColorPickerPanel} from 'rc-color-picker';
import './theme.scss';

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
    <Link className={styles.back} to ={`${process.env.PUBLIC_URL}/projects/organizer`}><i className='fa fa-close' /></Link>
      <div className ={styles.form}>
      	<input type='text' name='title'  className={styles.text} onChange={this.handleChange} placeholder='Add title'/>
      	<input type='textarea' name='description' className={styles.text} onChange={this.handleChange} placeholder='Describe your task'/>
      	<input type='checkbox' name='daily' className={styles.daily} onChange={this.handleChange}/>

      	<ColorPickerPanel enableAlpha={false} color={'#345679'} onChange={this.handleColor} mode="RGB" />
      	<TimePicker className={styles.time} onChange={this.handleTime} disableClock={true} value='00:00' clearIcon={null} />
      	<input type='number' name='duration' className={styles.duration} onChange={this.handleChange} placeholder='0'/>
      </div>
      <div className={styles.buttons}>
     <Link className={styles.add} to ={`${process.env.PUBLIC_URL}/projects/organizer`} onClick={e => 
       {addToDo(this.state.value)}}><i className='fa fa-check' /></Link>
      </div>
    </div>
    <Button text='Go back' />
  </div>

	)
  }
}

export default OrganizerAdd;