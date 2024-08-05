import React, { useState,Component ,ReactRadioButtonGroup} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Jumbotron,Row,Col,Image,Button,Container,Grid,OverlayTrigger,Nav,Modal,Radio} from 'react-bootstrap';
import { withRouter } from "react-router"
import PropTypes from "prop-types"

class AdminP2 extends React.Component{
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
    render(){
        return(
            <div class="b">
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
export default AdminP2;