import React, { useState,Component ,ReactRadioButtonGroup} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Jumbotron,Row,Col,Image,Button,Container,Grid,OverlayTrigger,Nav,Modal,Radio} from 'react-bootstrap';
import { withRouter } from "react-router"
import PropTypes from "prop-types"



class NavbarPage3 extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    constructor(props) {
        super(props);
        this.state = { value:'',value1:'',fid:'',fn:'',subi:'',subn:'',exi:'',ext:'',exd:'',roi:'',rd:'',roi1:''};
        this.handleChange=this.handleChange.bind(this);
      }
      handleChange(event) {
        if (event.target.name === "complain"){
        this.setState({value: event.target.value});
        }
        if (event.target.name === "subject"){
          this.setState({value1: event.target.value});
          }
      }
  
    
        getdata=()=>{
            console.log(this.state.username)
            var data= new URLSearchParams();
            data.append("name",this.state.username)
            data.append("p","2")
            fetch("http://localhost:8080/",{
              method:'post',
              body:data
            })
           .then(response =>{return response.json()})
           .then(response =>{
            this.setState({fid:response.fid})
            this.setState({fn:response.fn})
            this.setState({subi:response.subi})
            this.setState({subn:response.subn})
            this.setState({exi:response.exi})
            this.setState({ext:response.ext})
            this.setState({exd:response.exd})
            this.setState({roi:response.roi})
            this.setState({rd:response.rd})
            
           console.log(this.state.fid)
           
       
   })
   }

   


render() {
  this.state.username=this.props.location.state.detail
  return (
      <div  className="bS">
           <p class="SP3">Welcome   {this.state.fn}</p>
           <input type="submit" class="buttonSP" value="Show My Details" onClick={this.getdata}/>
           <p class="SP">Faculty ID :</p>
            <p class="SP1">{this.state.fid}</p>
            <p class="SP">Faculty Name :</p>
            <p class="SP1">{this.state.fn}</p>
            <p class="SP">Subject Name :</p>
            <p class="SP1">{this.state.subn}</p>
            <p class="SP">Exam Date :</p>
            <p class="SP2">{this.state.exd}</p>
            <p class="SP">Exam Time :</p>
            <p class="SP1">{this.state.ext}</p>
            <p class="SP">Room Details :</p>
            <p class="SP1">{this.state.rd}</p>
</div>
    );
  }
}

export default NavbarPage3;