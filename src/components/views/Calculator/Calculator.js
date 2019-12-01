import React from 'react';
import styles from './Calculator.module.scss';
import Button from '../../common/Button/Button';



class Calculator extends React.Component { 
    constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.insert = this.insert.bind(this)
    this.equal = this.equal.bind(this)
    this.clean = this.clean.bind(this)
    this.back = this.back.bind(this)

    }

    handleChange(event) {
        this.setState({value: event.target.value})
        event.preventDefault()
    }

    insert(num) {
      
      this.setState({value: this.state.value+num})
        


    }

    equal() {
      let arr = this.state.value
      var lastChar = arr[arr.length -1]
      
      console.log(lastChar)
      if (isNaN(lastChar)===false){
      this.setState({value: ''+eval(this.state.value)+''})

      }
       
    
    }

    clean() {   
      this.setState({value: []})
    }

    back() {
      let arr = this.state.value
      this.setState({value: arr.substring(0,arr.length-1)})
      console.log(arr)
      
    }


    render() {

    return (

  <div className={styles.component}>

    <h2 className={styles.title}>Calculator</h2>
  
  <div className={styles.main}>
  <form>
    <input className={styles.textview} value={this.state.value} onChange={this.handleChange} name='textview' />
  </form>
  <div className={styles.keyboard}>
  <table>
    <tbody>
      <tr>
      <td><input className={styles.btn} type='button' value ='C' onClick={event => this.clean()} /></td>
      <td><input className={styles.btn} type='button' value ='<' onClick={event => this.back()}/></td>
      <td><input className={styles.btn} type='button' onClick={event => this.insert('/')} value ='/'/></td>
      <td><input className={styles.btn} type='button' onClick={event => this.insert('*')} value ='x'/></td>
    </tr>

    <tr>
      <td><input className={styles.btn} type='button' onClick={event => this.insert(7)} value ='7' /></td>
      <td><input className={styles.btn} type='button' onClick={event => this.insert(8)} value ='8' /></td>
      <td><input className={styles.btn} type='button' onClick={event => this.insert(9)} value ='9'/></td>
      <td><input className={styles.btn} type='button' onClick={event => this.insert('-')} value ='-'/></td>
    </tr>

    <tr>
      <td><input className={styles.btn} type='button' onClick={event => this.insert(4)} value ='4' /></td>
      <td><input className={styles.btn} type='button' onClick={event => this.insert(5)} value ='5' /></td>
      <td><input className={styles.btn} type='button' onClick={event => this.insert(6)} value ='6'/></td>
      <td><input className={styles.btn} type='button' onClick={event => this.insert('+')} value ='+'/></td>
    </tr>

    <tr>
      <td><input  className={styles.btn} type='button' onClick={event => this.insert(1)} value='1' /></td>
      <td><input  className={styles.btn} type='button' onClick={event => this.insert(2)} value ='2' /></td>
      <td><input className={styles.btn} type='button' onClick={event => this.insert(3)} value ='3'/></td>
      <td rowSpan={2}><input className={styles.btn} style={{height:106}} type='button' onClick={event => this.equal()} value ='='/></td>
    </tr>

        <tr>
      <td colSpan={2}><input  className={styles.btn} style={{width:106}} type='button' onClick={event => this.insert(0)} value='0' /></td>
      <td><input  className={styles.btn} type='button' onClick={event => this.insert('.')} value ='.' /></td>

    </tr>

    </tbody>
  </table>
  </div>

  </div>
    <Button text='fa fa-level-up'/>


  </div>

	)
  }
}

export default Calculator;