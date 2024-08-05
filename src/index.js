
/*import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}
 
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
} 
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      empId:null,
      email: null,
      password: null,
      empQual:null,
      empSal:null,
      errors: {
        fullName: '',
        email: '',
        empQual: '',
        empId: '',
        password: '',
        empSal: '',
      }
    };
  }
 
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
 
    switch (name) {
      case 'fullName': 
        errors.fullName = 
          !(value.match(/^[a-zA-Z]+$/))
            ? 'Name must contain only characters!'
            : '';
        break;
      case 'empId':
        errors.empId =
        value.match(/^[a-zA-Z]+$/)
        ? 'Id must be in numbers only!'
        : '';
    break;
    case 'empSal':
      errors.empSal =
      value.match(/^[a-zA-Z]+$/)
      ? 'Salary must be in numbers only!'
      : '';
      default:
        break;
    }
 
    this.setState({errors, [name]: value});
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
 
  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2 style={{color : 'blue'}}>Add New Employee</h2>
          <form onSubmit={this.handleSubmit} noValidate>
          <div className='empId'>
              <label style={{color : 'Red'}}>Employee Id</label>
              <br></br>
              <input input type='text' name='empId' onChange={this.handleChange} noValidate />
              {errors.empId.length > 0 && 
                <span className='error'>{errors.empId}</span>}
            </div>
            <div className='fullName'>
              <label style={{color : 'Red'}}>Employee Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='empQual'>
              <label style={{color : 'Red'}}>Qualification</label>
              <br></br>
              <input input type='text' name='empQual' onChange={this.handleChange} noValidate />
              {errors.empQual.length > 0 && 
                <span className='error'>{errors.empQual}</span>}
            </div>
            <div className='password'>
              <label style={{color : 'Red'}}>Designation</label>
              <select className='password'>
              <option value="General">Sales Boy</option>
              <option value="OBC">Sales Manager</option>
              <option value="BC">HR</option>
          </select>
            </div>
            <div className='empSal'>
              <label style={{color : 'Red'}}>Salary</label>
              <br></br>
              <input input type='text' name='empSal' onChange={this.handleChange} noValidate />
              {errors.empSal.length > 0 && 
                <span className='error'>{errors.empSal}</span>}
            </div>
            <div className='submit'>
                  <button style={{color : 'grey'}}>Add Record</button> <button style={{color : 'grey'}}>Exit</button>
           </div>
            
            
</form>
        </div>
      </div>
    );
  }
}
 
render(<App />, document.getElementById('root'));*/
/*import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
 

class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}
 
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
 
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      empId:null,
      email: null,
      password: null,
      empQual:null,
      empSal:null,
      errors: {
        fullName: '',
        email: '',
        empQual: '',
        empId: '',
        password: '',
        empSal: '',
      }
    };
  }
 
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
 
    switch (name) {
      case 'fullName': 
        errors.fullName = 
          !(value.match(/^[a-zA-Z]+$/))
            ? 'Name must contain only characters!'
            : '';
        break;
      case 'empId':
        errors.empId =
        value.match(/^[a-zA-Z]+$/)
        ? 'Id must be in numbers only!'
        : '';
    break;
    case 'empSal':
      errors.empSal =
      value.match(/^[a-zA-Z]+$/)
      ? 'Salary must be in numbers only!'
      : '';
      default:
        break;
    }
 
    this.setState({errors, [name]: value});
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
 
  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Add new employee</h2>
          <form onSubmit={this.handleSubmit} noValidate>
          <div className='empId'>
              <label htmlFor="empId">Employee Id</label>
              <br></br>
              <input input type='text' name='empId' onChange={this.handleChange} noValidate />
              {errors.empId.length > 0 && 
                <span className='error'>{errors.empId}</span>}
            </div>
            <div className='fullName'>
              <label htmlFor="fullName">Employee Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='empQual'>
              <label htmlFor="empQual">Qualification</label>
              <br></br>
              <input input type='text' name='empQual' onChange={this.handleChange} noValidate />
              {errors.empQual.length > 0 && 
                <span className='error'>{errors.empQual}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Designation</label>
              <select className='password'>
              <option value="General">Sales Boy</option>
              <option value="OBC">Sales Manager</option>
              <option value="BC">HR</option>
          </select>
            </div>
            <div className='empSal'>
              <label htmlFor="empSal">Salary</label>
              <br></br>
              <input input type='text' name='empSal' onChange={this.handleChange} noValidate />
              {errors.empSal.length > 0 && 
                <span className='error'>{errors.empSal}</span>}
            </div>
            <div className='submit'>
                  <button style={{color : 'grey'}}>Add Record</button> <button style={{color : 'grey'}}>Exit</button>
           </div>        
            
</form>
        </div>
      </div>
    );
  }
}
 
render(<App />, document.getElementById('root'));*/





/*PROJECT INDEX:-*/
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import Route from 'react-router-dom/Router';
import Component from 'react';
//import './style.css';
//import Sample from "./Sample";
import SampleHome from "./SampleHome";
//import Lambda from "./Lambda";
//import './s.css';
import { Login } from './Login';
import * as serviceWorker from './serviceWorker';
import StudentP from './StudentP';
import Lambform from './Lambform';
import CloudLast from './CloudLast';

function Details(){
    return (

    <div>
      <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form> 
    </div> 
    
    );
}


ReactDOM.render( <SampleHome/> ,document.getElementById('root'));
serviceWorker.unregister();

/*import React from 'react';
import ReactDOM from 'react-dom';
//import FormElementCombined from './Reactbct';
import FormElementCombined from './Cloud2';
import Cloud from './Cloud';
import Sample from './Sample'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Cloud/>
    , document.getElementById('root'));*/

