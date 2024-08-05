import React from "react"

class Sample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "username") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "cardnumber") {
            const re = /^[0-9\10]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value2:event.target.value})
        }
            
        }
        else if (event.target.name === "ED") {
            this.setState({ value3: event.target.value })
        }
        else if(event.target.name == "SC"){
            const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value4:event.target.value})
        }
        }
    }

    handleSubmit(event) {
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
        if (this.state.value1 === '' || this.state.value2 === '')
            event.preventDefault();
    }
    render() {
        return (
            <div id="si">
                <form action="https://fbm8xs2hgh.execute-api.us-east-1.amazonaws.com/prod/re" onSubmit={this.handleSubmit} name="myform" method="GET" required>
                    <h1>Secure Payment Info</h1>
                    Name : <input type="text" value={this.state.value1} name="username" onChange={this.handleChange} required/> <br/><br/>
                    CardNumber : <input type="text" value={this.state.value2} name="cardnumber" onChange={this.handleChange} required/> <br/><br/>
                    Expiration Date : <input type="text" value={this.state.value3} name="ED" onChange={this.handleChange} required/> <br/><br/>
                    Security Code : <input type="text" value={this.state.value4} name="SC" onChange={this.handleChange} required/> <br/><br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default Sample