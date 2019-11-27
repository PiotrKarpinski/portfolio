import React from 'react';
import styles from './Organizer.module.scss';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom';
import TimePicker from 'react-time-picker'


class OrganizerAdd extends React.Component { 
    constructor(props) {
    super(props);
    this.state = {value: {title:'',daily:false, description:'', time:'06:00',duration:''}}
    this.add = this.add.bind(this)
    this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
    	let params = {[event.target.name]:event.target.value}
    	this.setState({value: {...this.state.value, [event.target.name]: event.target.value}})

    }

    handleTime = time => this.setState({ value: {...this.state.value, time} })

    add() {
    	console.log(this.state.value)
    }

    render() {

    return (

  <div className={styles.component}>
    <h2>Organizer</h2>
    <div className={styles.main}>
      <div className ={styles.form}>
      	<input type='text' name='title' className={styles.title} onChange={this.handleChange} value={this.state.value.title}/>
      	<input type='textarea' name='description' className={styles.description} onChange={this.handleChange}/>
      	<input type='checkbox' name='daily' className={styles.daily} onChange={this.handleChange}/>Daily
      	
      	<TimePicker className={styles.time} onChange={this.handleTime} disableClock={true} clearIcon={null} />
      	<input type='number' name='duration' className={styles.duration} onChange={this.handleChange}/>
      </div>
      <div className={styles.buttons}>

      <Link className={styles.back} to ={`${process.env.PUBLIC_URL}/projects/organizer`}>back</Link>
      <input  className={styles.add} type='button' onClick={this.add} value='ok' />
      </div>
    </div>
    <Button text='Go back' />
  </div>

	)
  }
}

export default OrganizerAdd;