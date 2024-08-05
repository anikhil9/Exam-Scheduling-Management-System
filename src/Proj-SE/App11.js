import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import A from './admin';
import L from './login';
import N from './nav';
import Ab from './about';
import H from './home';

function App() {
  return (
    <Router>
<div>
    <N/>
    <Route exact path="/" component={H}/>
    <Route exact path="/login" component={L}/>
    <Route  path="/admin" component={A}/>
    <Route  path="/about" component={Ab}/>
</div>
    </Router>
  );
}

export default App;
