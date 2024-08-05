import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './s.css';
import AdminP1 from "./AdminP1";
import AdminP2 from "./AdminP2";
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'

class AdminP extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3: '',value4: '',AdminP: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.getdata = this.getdata.bind(this);
        //this.displayPage = this.displayPage.bind(this);
    }

    handleChange(event) {
        
        if (event.target.name === "EI") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "ET") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "ED") {
            this.setState({ value3: event.target.value })
        }
        else if (event.target.name === "type1") {
            this.setState({ value4: event.target.value })
        }
    }

    
    handleSubmit(event) {
             
           
       if (this.state.value1 === '' || this.state.value2 === '' || this.state.value3 === '' || this.state.value4 === '')
       event.preventDefault();
}     
    render() {
        return (
          /*<div class="b">
            <nav className="navbar navbar">
              <ul className="nav">
                 <li>
                  <Link class="u"to="/AdminP1">Room</Link>
                </li>
               
                <li>
                  <Link class="u" to="/AdminP2">Exam</Link>
                </li> 
              </ul>
            </nav>
    
            <Switch>
            <Route exact path="/AdminP1" component={AdminP1} />
              <Route exact path="/AdminP2" component={AdminP2} />
            </Switch>
          </div>*/






          <div class='b4'>
        <form action="http://localhost:8182" target='_blank' onSubmit={this.handleSubmit} name="myform" method="POST">
        <h1 class='log123'>For Exam</h1>                   
    <p class='us1'>Exam ID<span class="a1">:</span></p> 
    <br></br>
    <input type="text" class='un1' size='30'value={this.state.value1} name="EI" placeholder="Enter your Details for Modification" onChange={this.handleChange} required/> <br/>
    <p class='us1'>Exam Time<span class="a1">:</span></p> 
    <br></br>
    <input type="text" class='un31' size='30'value={this.state.value2} name="ET" placeholder="Enter your Details for Modification" onChange={this.handleChange} required/> <br/>
    <p class='us1'>Exam Date<span class="a1">:</span></p> 
    <br></br>
    <input type="text" class='un21' size='30'value={this.state.value3} name="ED" placeholder="Enter your Details for Modification" onChange={this.handleChange} required/> <br/>  
    <br></br>   
    <span class='us1'>  <select  name='type1' value={this.state.value4} onChange={this.handleChange} >
         <option>--Select--</option>
    <option>Update</option>
     <option>Delete</option>                                          
    </select>
    </span>
    <br></br>          
    <input type="submit" class="button" value="Confirm"/>
     <br></br>
     </form>
      </div>
        );
      }
}  
export default AdminP;


/*constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3: '',value4: '',value5: '',value6: '',value7: '',value8: '',AdminP: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.getdata = this.getdata.bind(this);
        //this.displayPage = this.displayPage.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "RI") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "Sec") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "RD") {
            this.setState({ value3: event.target.value })
        }
        else if (event.target.name === "type") {
            this.setState({ value4: event.target.value })
        }
        else if (event.target.name === "EI") {
            this.setState({ value5: event.target.value })
        }
        else if (event.target.name === "ET") {
            this.setState({ value6: event.target.value })
        }
        else if (event.target.name === "ED") {
            this.setState({ value7: event.target.value })
        }
        else if (event.target.name === "type1") {
            this.setState({ value8: event.target.value })
        }
    }

    handleSubmit(event) {
             
           
       if (this.state.value1 === '' || this.state.value2 === '' || this.state.value3 === '' || this.state.value4 === '')
       event.preventDefault();
}      
    render(){
        return(
            <div class='b4'>
            <div >
                <form action="http://localhost:8181" target='_blank' onSubmit={this.handleSubmit} name="myform" method="POST">
                    <h1 class='log12'>Welcome Admin</h1> 
                    <br></br>               
                    <p class='us1'>Room ID<span class="a1">:</span></p> 
                    <br></br>
                    <input type="text" class='un1' size='30'value={this.state.value1} name="RI" placeholder="Enter your Details for Modification" onChange={this.handleChange} required/> <br/>
                    <p class='us1'>Sec<span class="a1">:</span></p> 
                    <br></br>
                    <input type="text" class='un3' size='30'value={this.state.value2} name="Sec" placeholder="Enter your Details for Modification" onChange={this.handleChange} required/> <br/>
                    <p class='us1'>Room Details<span class="a1">:</span></p> 
                    <br></br>
                    <input type="text" class='un2' size='30'value={this.state.value3} name="RD" placeholder="Enter your Details for Modification" onChange={this.handleChange} required/> <br/>  
                    <br></br>   
                    <span class='us1'>  <select  name='type' value={this.state.value4} onChange={this.handleChange} >
                         <option>--Select--</option>
                    <option>Update</option>
                     <option>Delete</option>                                          
                    </select>
                    </span>
                    <br></br>          
                    <input type="submit" class="button" value="Confirm"/>
                     <br></br>
                </form>
            </div>

       <div>
        <form action="http://localhost:8182" target='_blank' onSubmit={this.handleSubmit} name="myform" method="POST">
    <h1 class='log123'>For Exam</h1>                   
    <p class='us1'>Exam ID<span class="a1">:</span></p> 
    <br></br>
    <input type="text" class='un1' size='30'value={this.state.value5} name="EI" placeholder="Enter your Details for Modification" onChange={this.handleChange} required/> <br/>
    <p class='us1'>Exam Time<span class="a1">:</span></p> 
    <br></br>
    <input type="text" class='un31' size='30'value={this.state.value6} name="ET" placeholder="Enter your Details for Modification" onChange={this.handleChange} required/> <br/>
    <p class='us1'>Exam Date<span class="a1">:</span></p> 
    <br></br>
    <input type="text" class='un21' size='30'value={this.state.value7} name="ED" placeholder="Enter your Details for Modification" onChange={this.handleChange} required/> <br/>  
    <br></br>   
    <span class='us1'>  <select  name='type1' value={this.state.value8} onChange={this.handleChange} >
         <option>--Select--</option>
    <option>Update</option>
     <option>Delete</option>                                          
    </select>
    </span>
    <br></br>          
    <input type="submit" class="button" value="Confirm"/>
     <br></br>
</form>
</div>

</div>
            
        );
    }
} */