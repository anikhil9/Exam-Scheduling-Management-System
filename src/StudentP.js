import React, { useState,Component ,ReactRadioButtonGroup} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Jumbotron,Row,Col,Image,Button,Container,Grid,OverlayTrigger,Nav,Modal,Radio} from 'react-bootstrap';
import { withRouter } from "react-router"
import PropTypes from "prop-types"



class NavbarPage2 extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    constructor(props) {
        super(props);
        this.state = { value:'',value1:'',S_ID:'',S_Name:'',Sem:'',F_ID:'',P_ID:'',P_name:''};
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
            data.append("p","1")
            fetch("http://localhost:8080/",{
              method:'post',
              body:data
            })
           .then(response =>{return response.json()})
           .then(response =>{
            this.setState({S_ID:response.S_ID})
            this.setState({S_Name:response.S_Name})
            this.setState({Sem:response.Sem})
            this.setState({F_ID2:response.F_ID2})
            this.setState({P_ID:response.P_ID})
            this.setState({P_ID2:response.P_ID2})
            this.setState({P_name2:response.P_name2})
            this.setState({F_name:response.F_name})
            this.setState({SubI:response.SubI})
            this.setState({SubN:response.SubN})
            this.setState({ExT:response.ExT})
            this.setState({ExD:response.ExD})
            this.setState({Sno:response.Sno})
            this.setState({Rno:response.Rno})
            this.setState({Sec:response.Sec})
            this.setState({RD:response.RD})
           console.log(this.state.S_ID)
           console.log(this.state.P_name)
           console.log(this.state.F_name)
       
   })
   }

   


render() {
  this.state.username=this.props.location.state.detail
  return (
      <div  className="bS">
           <p class="SP3">Welcome   {this.state.S_Name}</p>
           <input type="submit" class="buttonSP" value="Show My Details" onClick={this.getdata}/>
           <p class="SP">Student ID :</p>
            <p class="SP1">{this.state.S_ID}</p>
            <p class="SP">Student Name :</p>
            <p class="SP1">{this.state.S_Name}</p>
            <p class="SP">Sem :</p>
            <p class="SP1">{this.state.Sem}</p>
            {/* <p class="SP">Faculty ID :</p>
            <p class="SP1">{this.state.F_ID2}</p>
             <p class="SP">Program ID :</p>
            <p class="SP1">{this.state.P_ID2}</p>  */}
            <p class="SP">Program name :</p>
            <p class="SP1">{this.state.P_name2}</p>
            <p class="SP">Faculty name :</p>
            <p class="SP1">{this.state.F_name}</p>
            <p class="SP">Subject name :</p>
            <p class="SP1">{this.state.SubN}</p>
            <p class="SP">Exam Date :</p>
            <p class="SP2">{this.state.ExD}</p>
            <p class="SP">Exam Time :</p>
            <p class="SP1">{this.state.ExT}</p>
            <p class="SP">Seat No :</p>
            <p class="SP1">{this.state.Sno}</p>
            <p class="SP">Section :</p>
            <p class="SP1">{this.state.Sec}</p>
            <p class="SP">Room Details :</p>
            <p class="SP1">{this.state.RD}</p>
</div>
    );
  }
}

export default NavbarPage2;