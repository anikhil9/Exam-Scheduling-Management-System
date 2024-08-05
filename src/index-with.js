var http = require('http');

http.createServer(function (req,res){
  res.writeHead(200,{'content-type':'text/html'});
  res.end('hello world');
}).listen(8080);
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
