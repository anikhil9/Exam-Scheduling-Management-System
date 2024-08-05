import React, {Component} from "react"
import { exportDefaultSpecifier, logicalExpression } from "@babel/types";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from  "react-router";
//import Route from 'react-router-dom/Router';



class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        if (event.target.name === "Username"){
            this.setState({value1:event.target.value})
        }
         if (event.target.name === "Password") {
            this.setState({ value2: event.target.value })
        }
        if(event.target.name==="type")
        {
            this.setState({value3:event.target.value})
        }
    }

    handleSubmit(event){
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
      if (this.state.value1 === '' || this.state.value2 === '')
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
            <Router>
            <div class='b1'>
                <form action="http://localhost:8081" target='_blank' onSubmit={this.handleSubmit} name="myform" method="GET">
                    <h1 class='log1'>Sign Up Form</h1>
                    <h2 class='c'> Tech Springs : ESM System</h2>
                   
                    <p class='us'>User ID <span class="a1">:</span></p> 
                    <br></br>
                    <input type="text" class='un1' size='30'value={this.state.value1} name="Username" placeholder="Enter your ID" onChange={this.handleChange} required/> <br/>
                   <p class="us">Password</p> <p class="u1">:</p>
                   <br></br>
                    <input type="password" class='y1' size='30' value={this.state.value2} name="Password" placeholder="Enter your Password"onChange={this.handleChange} required/> <br/>
                  <pre class="us">Designation      :</pre> 
                  <br></br>
                  <label> <select name="type" class='y' value={this.state.value3}  onchange={this.handleChange} id="op"> 
                     <option>--Select--</option>   
		             <option>Student</option>
                    </select> </label><br></br>
                    <br></br>                                 
                        <input type="submit" class="button" value="Sign Up"/>
                        <br></br>
                        {/* <button type="button" class="cancelbtn">Cancel</button>
                        <span class="psw"><a href="#">Forgot password?</a></span>
                        
                         <p class='us'>Student_Name<span class="a">:</span></p> 
                    <br></br>
                    <input type="text" class='un' size='30'value={this.state.value4} name="Student_Name" placeholder="Enter your Name" onChange={this.handleChange} /> <br/>*/
                        /**/}
                        
                </form>
            </div>
            </Router>
            </React.Fragment>
        )
    }
}
export default SignUp;