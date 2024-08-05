import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './Home'
import  About  from './About';
import  Contact  from './Contact';
import NoMatch from './NoMatch';
import  Login  from './Login';
import SignUp from './SignUp';
import StudentP from './StudentP';
import TeacherP from './TeacherP';
import AdminP from './AdminP';
import AdminP1 from "./AdminP1";
import AdminP2 from "./AdminP2";
//import  Layout  from './components/Layout';
import  NavigationBar  from './components/NavigationBar';
import  Jumbotron  from './components/Jumbotron';



class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/StudentP" component={StudentP} />
              <Route exact path="/TeacherP" component={TeacherP} />
              <Route exact path="/AdminP" component={AdminP} />
              <Route component={NoMatch} />
            </Switch>
            
        </Router>
      </React.Fragment>

    );

  }

}



export default App;