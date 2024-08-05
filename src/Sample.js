/*import React from "react";
import './style.css';
import ReactDOM from "react-dom";

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3:'',value5:'',value6:'',value7:'',value8:'',value9:'',value10:'',value11:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        if (event.target.name === "Name") {
            const re = /^[a-zA-Z\b]+$/;
            if (event.target.value === '' || re.test(event.target.value)) {
               this.setState({value1:event.target.value})
            }
         }
        else if (event.target.name === "Departement") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "Age") {
            const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value3:event.target.value})
        }
        else if (event.target.name === "PT") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "anrn") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "jcnf") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "WL") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "SD") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "PP") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "AC") {
            this.setState({ value2: event.target.value })
        }
        }
    }
    
    handleSubmit(event) {
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
        if (this.state.value1 === '' || this.state.value2 === ''|| this.state.value3 === ''|| this.state.value5 === '' || this.state.value6 === ''|| this.state.value7 === ''|| this.state.value8 === ''|| this.state.value9 === ''|| this.state.value10 === ''|| this.state.value11 === '')
            event.preventDefault();
    }
    render() {
        const mystyles={color:"blue"};
        return ( 
            <div className='MyStyles'>
                <h1>Paper Submission Form</h1> 
                <p>Hi r_gowtham@cb.amrita.edu,when you submit this form,the owner will be able to see your name and email address</p>
                <form action="http://localhost:8080" onSubmit={this.handleSubmit} name="myform" method="POST"> 
                <br />
                Name : <input type="text" style={mystyles} value={this.state.value1} name="School/Centre Campus" onChange={this.handleChange} /> 
                <br />
                Department : <input type="text" style={mystyles} value={this.state.value2} name="Department" onChange={this.handleChange} />
                <br />
                Age : <input type="text" style={mystyles} value={this.state.value3} name="Age" onChange={this.handleChange} />
                <br />
                PT : <input type="text" style={mystyles} value={this.state.value5} name="Paper title" onChange={this.handleChange} />
                <br />
                anrn : <input type="text" style={mystyles} value={this.state.value6} name="Authors name and Register Numbers" onChange={this.handleChange} />
                <br />
                jcnf: <input type="text" style={mystyles} value={this.state.value7} name="Journal/Conference Name in Full" onChange={this.handleChange} />
                <br />
                WL: <input type="text" style={mystyles} value={this.state.value8} name="Website Link" onChange={this.handleChange} />
                <br />
                SD: <input type="text" style={mystyles} value={this.state.value9} name="Submission DeadLine" onChange={this.handleChange} />
                <br />
                PP: <input type="text" style={mystyles} value={this.state.value10} name="Plagearism Percentage" onChange={this.handleChange} />
                <br />
                AC: <input type="text" style={mystyles} value={this.state.value11} name="No of Amrita citations" onChange={this.handleChange} />
                <br />
                <p>Submitted Paper Already :
                   <select >
                                     <option>Yes</option>
                                     <option>No</option>  
                                     </select></p>
                <p>Recieve Emails :
                   <select >
                                     <option>Yes</option>
                                     <option>No</option>  
                 </select></p>                     
                <input type="submit" value="submit" />
                </form>
        </div> 
           
        )
    }
}   
export default Sample
/*constructor(props) {
        super(props);
        this.state = { value1: '', value2: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "Name") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "") {
            this.setState({ value2: event.target.value })
        }
    }

    handleSubmit(event) {
        alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
        if (this.state.value1 === '' || this.state.value2 === '')
            event.preventDefault();
    }
<form action="http://localhost:8081/" onSubmit={this.handleSubmit} name="myform" method = "POST">
                    <br>
                    </br>
                    Name : <input type="text" value={this.state.value1} name="Name" onChange={this.handleChange} />
                    <br>
                    </br>
                    Age : <input type="text" value={this.state.value2} name="Age" onChange={this.handleChange} />
                    <input type="submit" value="submit" /> </form>




                    else if(event.target.name === "Email") {
            const re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({value4:event.target.value})    
        }
*/

/*import React from "react"

class Sample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
         if (event.target.name === "name") {
            const re = /^[a-zA-Z\b]+$/;
            if (event.target.value === '' || re.test(event.target.value)) {
               this.setState({value1:event.target.value})
            }
         }
         else if (event.target.name === "inst") {
            const re = /^[a-zA-Z\b]+$/;
            if (event.target.value === '' || re.test(event.target.value)) {
               this.setState({value2:event.target.value})
            }
         }
         else if (event.target.name === "con") {
            const re = /^[a-zA-Z\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value3:event.target.value})
        }
        }
        
        else if (event.target.name === "titl") {
            const re = /^[a-zA-Z\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value5:event.target.value})
        }
        }
        
        else if (event.target.name === "kw") {
            const re = /^[a-zA-Z\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value7:event.target.value})
        }
        }
        
    }

    handleSubmit(event) {
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
        if (this.state.value1 === '' || this.state.value2 === '')
            event.preventDefault();
    }
    render() {
        const mystyles={color:"blue"};
        return (
            <div id="si">
                <form action="http://localhost:8080" onSubmit={this.handleSubmit} name="myform" method="POST">
                <h1 style={{color:"red"}}>PAPER SUBMISSION FORM</h1>
                <p>Designation :
                   <select >
                                     <option>Mr.</option>
                                     <option>Mrs</option>
                                     <option>Dr</option>
                                     <option>Asst Prof Dr.</option>
                                     <option>Assoc Prof Dr.</option>
                                     <option> Prof Dr</option>
                                     </select></p>
                    Name : <input type="text" style={mystyles} value={this.state.value1} name="name" onChange={this.handleChange} /> //eg.John<br/><br/>
                    Institution : <input type="text" style={mystyles} value={this.state.value2} name="inst" onChange={this.handleChange} /> <br/><br/>
                    Country : <input type="text" style={mystyles} value={this.state.value3} name="con" onChange={this.handleChange} /> <br/><br/>
                    Email :<input type="text" style={mystyles} value={this.state.value4} name="Email" onChange={this.handleChange} /> <br/><br/>
                    Paper Title :<input type="text" style={mystyles} value={this.state.value5} name="titl" onChange={this.handleChange} /> <br/><br/>
                    Abstracts :<input type="text" style={mystyles} value={this.state.value6} name="abs" onChange={this.handleChange} /> <br/><br/>
                    Keywords :<input type="text" style={mystyles} value={this.state.value7} name="kw" onChange={this.handleChange} /> <br/><br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default Sample*/


import React, {Component} from "react"
import { exportDefaultSpecifier, logicalExpression } from "@babel/types";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from  "react-router";
//import Route from 'react-router-dom/Router';



class Sample extends React.Component {

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
            <div class='b'>
                <form action="http://localhost:8080" target='_blank' onSubmit={this.handleSubmit} name="myform" method="POST">
                    <h1 class='log'>Login</h1>
                    <h2 class='c'> Tech Springs : ESM System</h2>
                    
                    <p class='us'>User ID <span class="a">:</span></p> 
                    <br></br>
                    <input type="text" class='un' size='30'value={this.state.value1} name="Username" placeholder="enter your id" onChange={this.handleChange} /> <br/>
                   <p class="us">Password</p> <p class="u">:</p>
                   <br></br>
                    <input type="password" class='y' size='30' value={this.state.value2} name="Password" placeholder="enter your password"onChange={this.handleChange} /> <br/>
                  <p class="us">Designation :</p> 
                  <br></br>
                  <label> <select name="type" class='y' value={this.state.value3}  onchange={this.handleChange} id="op"> 
                     <option>--Select--</option>   
		             <option>Student</option>
                     <option>Teacher</option>                                          
			        <option>Admin</option>
                    </select> </label><br></br>
                    <br></br>                                 
                        <input type="submit" class="button" value="Login"/>
                        <br></br>
                        {/* <button type="button" class="cancelbtn">Cancel</button>
                        <span class="psw"><a href="#">Forgot password?</a></span> */
                        /**/}
                </form>
            </div>
            </Router>
            </React.Fragment>
        )
    }
}
export default Sample;

/*Router Code:-
<Route path="http://localhost:8080" exact strict render={
                     () => {
                     return ( <h1>Welcome To Student Portal</h1>);
                     }
                    }/>
                    
                    
Router:-2
 <ul>
                    <li><link to={"/About"} activeClassName={""}   >About</link></li>

                </ul>           
                
                
                
              <div>
                <switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                </switch>
            </div>  */
