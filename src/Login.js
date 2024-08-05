// import React, {Component} from "react"
// import { exportDefaultSpecifier, logicalExpression } from "@babel/types";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {Link} from  'react-router-dom';
// //import {Link} from  "react-router";
// //import Route from 'react-router-dom/Router';
// import StudentP from './StudentP';



// class Login extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { value1: '', value2: '',value3: ''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.getdata = this.getdata.bind(this);
//         this.displayPage = this.displayPage.bind(this);
//     }

//     handleChange(event){
//         if (event.target.name === "Username"){
//             this.setState({value1:event.target.value})
//         }
//          if (event.target.name === "Password") {
//             this.setState({ value2: event.target.value })
//         }
//         if(event.target.name==="type")
//         {
//             this.setState({value3:event.target.value})
//             console.log(this.state.value3);
//         }
//     }

    

//     handleSubmit(event){
//         this.getdata();
//        // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
//       if (this.state.value1 === '' || this.state.value2 === '' )
//         event.preventDefault();
    
//     }

//     getdata=()=>{

//         console.log('hi')
//         console.log(this.state.value3);
//         var data= new URLSearchParams();
//         data.append("Username",this.state.value1)
//         data.append("Password",this.state.value2)
//         data.append("type",this.state.value3)
//         fetch("http://localhost:8080/",{
//           method:'POST',
//           body:data
//         })
//        .then(response =>{return response.json()})
//        .then(response =>{
//         this.setState({login:response.log})
//         this.displayPage(this.state.login);
//        console.log(this.state.login)
//    })
//    }

//    displayPage=(index)=>//displayPage is a function with some flag variable(index) as a param
//    {
    
//     switch(index){
//         default:
//         case 1:
//                // return   alert("correct credentials")
//                 return  this.props.history.push("/StudentP")
//         case 2:
//                         // return   alert("correct credentials")
//                  return  this.props.history.push("/TeacherP")
//         case 3:
//                         // return   alert("correct credentials")
//                  return  this.props.history.push("/AdminP")                 
//         case 0:
//                 return   alert("wrong credentials")
//         }
//     }


//     render() {
//         return (
//             <React.Fragment>
//             <Router>
//             <div class='b'>
//                 <form onSubmit={this.handleSubmit} name="myform" method="POST">
//                     <h1 class='log'>Login</h1>
//                     <h2 class='c'> Tech Springs : ESM System</h2>
                    
//                     <p class='us'>User ID <span class="a">:</span></p> 
//                     <br></br>
//                     <input type="text" class='un' size='30'value={this.state.value1} name="Username" placeholder="enter your id" onChange={this.handleChange} required/> <br/>
//                    <p class="us">Password</p> <p class="u">:</p>
//                    <br></br>
//                     <input type="password" class='y' size='30' value={this.state.value2} name="Password" placeholder="enter your password"onChange={this.handleChange} required/> <br/>
//                   <p class="us">Designation :</p> 
//                   <br></br>
//                   {/* <label> <select name="type" class='y' value={this.state.value3}  onchange={this.handleChange} id="op"  placeholder="select"> 
//             		             <option>Student</option>
//                      <option>Teacher</option>                                          
// 			        <option>Admin</option>
//                     </select> </label><br></br> */}

                    
//                    <span class='y'>  <select  name='type' value={this.state.value3} onChange={this.handleChange} >
//                     <option>Student</option>
//                     <option>Teacher</option>                                          
// 			        <option>Admin</option>
//                                      </select>
//                                      </span> 
//                     <br></br>                                 
//                         <input type="submit" class="button" value="Login"/>
//                         <br></br>
//                         {/* <button type="button" class="cancelbtn">Cancel</button>
//                         <span class="psw"><a href="#">Forgot password?</a></span> */
//                         /**/}
                        
//                 </form>
//             </div>
//             </Router>
//             </React.Fragment>
//         )
//     }
// }
// export default Login;

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
            </div> 
            
            
            <p class="lp2">or </p>
                     <p class="lp1">Create a Account</p>
                     <a className="l2" href="/SignUP"><span class="glyphicon glyphicon-log-in"></span>Sign Up</a>*/



//import React from "react";
import './s.css';
//import {Link} from  'react-router-dom'
import React, {Component} from "react"
import { exportDefaultSpecifier, logicalExpression } from "@babel/types";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import {Link} from  'react-router-dom';
//import {Link} from  "react-router";
//import Route from 'react-router-dom/Router';
import StudentP from './StudentP';
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3: 'authorities',login:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getdata = this.getdata.bind(this);
        this.displayPage = this.displayPage.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "Username") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "Password") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "type") {
            this.setState({ value3: event.target.value })
        }
    }

    handleSubmit(event) {
             this.getdata();
           
       if (this.state.value1 === '' || this.state.value2 === '')
       event.preventDefault();
       
    }
    getdata=()=>{
     var data= new URLSearchParams();
     data.append("Username",this.state.value1)
     data.append("Password",this.state.value2)
     data.append("type",this.state.value3)
     fetch("http://localhost:8080/",{
       method:'post',
       body:data
     })
    .then(response =>{return response.json()})
    .then(response =>{
     this.setState({login:response.log})
     this.displayPage(this.state.login);
    console.log(this.state.login)
})
}

displayPage=(index) =>//displayPage is a function with some flag variable(index) as a param
{
    
    switch(index){
        default:
     case 1:
          // return   alert("correct credentials")
          return   this.props.history.push({
            pathname: '/StudentP',
            search: '?query=abc',
            state: { detail: this.state.value1 }
          })
     case 2:
          // return   alert("correct credentials")
         return  this.props.history.push({
            pathname: '/TeacherP',
            search: '?query=abc',
            state: { detail: this.state.value1 }
         })
     case 3:
         // return   alert("correct credentials")
         return  this.props.history.push({
            pathname: '/AdminP',
            search: '?query=abc',
            state: { detail: this.state.value1 }
         })                 
     case 0:
         return   alert("wrong credentials")
    }
}
   
    render() {
        
        return (
           
        <div class='b' >
                    <form onSubmit={this.handleSubmit} name="myform" method="POST">
                     <h1 class='log'>Login</h1>
                     <h2 class='c'> Tech Springs : ESM System</h2>
            
                     <p class='us'>User ID <span class="a">:</span></p> 
                     <br></br>   
                     <input type="text" value={this.state.value1} class='un' size='30' name="Username"  placeholder='Enter Your ID' onChange={this.handleChange} required/> <br/><br/>
                     <p class="us">Password</p> <p class="u">:</p>
                     <br></br>
                     <input type="password" value={this.state.value2} class='y' size='30' name="Password" placeholder='Enter Your Password' onChange={this.handleChange}  required/> <br/><br/>
                     <p class="us">Designation :</p> 
                     <br></br>
                     <span class='y'>  <select  name='type' value={this.state.value3} onChange={this.handleChange} >
                         <option>--Select--</option>
                    <option>Student</option>
                     <option>Faculty</option>                                          
 			        <option>Admin</option>
                                      </select>
                                      </span> 
                     <br></br>               
                  <input type="submit" class="button" value="Login"/>
                </form>
          </div>      
            
        )
    }
}
export default Login                   