import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div`

  .navbar {

    background-color: rgba(46, 46, 46, 0.671);
    border: 2px solid;
    block-size:50px;
    border-radius: 5px;
    border: 2px ridge black;

  }


  a, .navbar-brand, .navbar-nav .nav-link {

    color: #bbb;
  



    &:hover {

      color:white;

    }
    
    .navi{
        margin-left=30px;
    }

    .ml{
      margin-top:5px;
    }

  }

`;

class NavigationBar extends React.Component{
    render(){
        return(
            <Styles>

    
    <Navbar expand="bg">

      <Navbar.Brand href="/" class="ml">Tech Springs Integrated System</Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav class="ml-auto">

         <div>
           
   
          <a className="a1" href="/">Home</a>
          <a className="a2" href="/About">About</a>
          <a className="a2" href="/News">News</a>
          <a className="a2" href="/Contact">Contact</a>
          <a className="a2" href="/SignUp"><span class="glyphicon glyphicon-log-in"></span>Sign Up</a>
          <a className="a2" href="/Login"><span class="glyphicon glyphicon-log-in"></span>Login</a>
  
         </div>
    
    
        </Nav>

      </Navbar.Collapse>

    </Navbar>

  </Styles >
            
        );
    }
}
export default NavigationBar;
        







/*import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './nav2.css'
class NavigationBar extends React.Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <nav class="a">
  <a class="navbar-brand" href="#">Exam Scheduling Management System</a>
    <div class="b" id="navbarNav">
 
        <a class="nav-link" href="/">Home </a>
     
        <a class="nav-link" href="/about">About</a>
     
        <a class="nav-link" href="/news">Contact</a>

        <a class="nav-link" href="/news">Login</a>
 
     
        
    
   
  </div>
</nav>
    );
  }
}

export default NavigationBar;




<a class="nav-link disabled" href="/form_proj">Login</a>
<a class="nav-link disabled" href="/signupform">Signup</a>





background-color: rgba(46, 46, 46, 0.671);


<Navbar.Toggle aria-controls="basic-navbar-nav" />

<Nav.Item class="Ni">

            <Nav.Link>

              <Link class="Ni2" to="/">Home</Link>

            </Nav.Link>

          </Nav.Item>

          <Nav.Item>

            <Nav.Link>

              <Link to="/about">About</Link>

            </Nav.Link>

          </Nav.Item>

          <Nav.Item >

            <Nav.Link>

              <Link class="navi" to="/contact">Contact</Link>

            </Nav.Link>

          </Nav.Item>

          <Nav.Item>

            <Nav.Link>

              <Link to="/Login">Login</Link>

            </Nav.Link>

          </Nav.Item>

<a class="navbar-brand" href="#">Tech Springs Integrated System</a>
<Navbar.Toggle aria-controls="basic-navbar-nav" />




*/



/*import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">Tech Springs Integrated System</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Login">Login</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                       <NavLink href="/Contact">Contact</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}*/




/*import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './nav2.css'
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
//     <nav class="a">
//       <div class="container-fluid">
//       <div><a class="navbar-brand" href="#">Integrated Waste Management System(IWMS)</a></div>
  
//    <div>  <a class="nav-link" href="/">Home</a> </div>
//     <a class="nav-link" href="/about">about</a>
//      <a class="nav-link" href="/news">News</a> 
//      <a class="nav-link " href="/form_proj">Login</a>
//       <a class="nav-link " href="/signupform">Signup</a>
//       </div>
// </nav>

<nav class="navbar">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Tech Springs Integrated System</a>
    </div>
   
       <a className="a1" href="/">Home</a>
      <a className="a2" href="/About">About</a>
      <a className="a2" href="/News">News</a>
      <a className="a2" href="/Contact">Contact</a>
      <a className="a2" href="/Login"><span class="glyphicon glyphicon-log-in"></span>Login</a>
  
  </div>
</nav> 
    );
  }
}

export default NavbarPage;*/