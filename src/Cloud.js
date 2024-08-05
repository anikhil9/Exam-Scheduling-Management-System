import React from "react"
import { exportDefaultSpecifier, logicalExpression } from "@babel/types";



class Sample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value4: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        if (event.target.name === "HouseNo"){
            this.setState({value1:event.target.value})
        }
         if (event.target.name === "HouseName")
        {
            const reg=/^[a-z\b]+$/;
            this.setState({ value2: event.target.value })
        }
        if(event.target.name==="type")
        {
            this.setState({value3:event.target.value})
        }
        if(event.target.name==="Zipcode")
        {
            const reg=/^[0-9\b]+$/;
            this.setState({value4:event.target.value})
        }
    }

    handleSubmit(event){
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
      if (this.state.value1 === '' || this.state.value2 === ''|| this.state.value4 === '')
        event.preventDefault();
    }
    render() {
        return (
            <div class='b'>
                <form action="http://localhost:8080/" target='_blank' onSubmit={this.handleSubmit} name="myform" method="GET" enctype="multipart/form-data">
                    <h1 class='c'>House Details</h1>
                    
                    <p class='us'>House No :</p>
                    <input type="text"class='y' size='50'value={this.state.value1} name="HouseNo"placeholder="enter your House NO" onChange={this.handleChange} /> <br/>
                   <p class="us">House Name :</p>
                    <input type="text" class='y'size='50' value={this.state.value2} name="HouseName" placeholder="enter your House Name"onChange={this.handleChange} /> <br/>
                    <p class="us">Zip Code :</p>
                    <input type="number" class='y'size='50' value={this.state.value4} name="Zipcode" placeholder="enter your Zipcode"onChange={this.handleChange} /> <br/>
                    <br></br>   
                     Uploadfile : <input type="file" name="document" /> <br/>                              
                        <input type="submit" class="button" value="Submit"/>
                        <br></br>
                        <br></br>
                        <button type="button" class="cancelbtn">Cancel</button>

                </form>
            </div>
            /*<div>
            <form action="http://localhost:9000/abc" name="myform" method="POST" enctype="multipart/form-data">
                Uploadfile : <input type="file" name="document" /> <br/>
                <input type="submit" />
            </form>
            </div>
            
            <p class="us">Designation :</p> 
                  <label> <select name="type" class='y' value={this.state.value3}  onchange={this.handleChange} id="op">       
                 <option>Employee</option>                                          
              <option>Admin</option>
                    </select> </label><br></br>
                    <span class="psw"><a href="#">Forgot password?</a></span> */
        )
    }
}
export default Sample;