import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



  ReactDOM.render(  <div >
    <h1  id="name1" >[A.Jasvith Chand]</h1> 
    <h4 id="name2" >[ABC]</h4>
    <h4 id="name2" >[cb.en.u4cse17205@cb.students.amrita.edu]</h4>
    <h2>EDUCATION</h2>
    <hr></hr>
    <pre id="name3">
       <b>university of washington School of Medicine - Seattle , WA</b>     <span class="sp">21-6-2019</span>    
                   <pre id='margin'> Doctor of Medicine<br></br>
    
                  Expected Graduation:<br></br></pre>
    
        <b>university of washington School of Public Health-Seattle,WA</b> <span class="sp">20-6-2019</span>                             
        <br></br >
        <pre id='margin'>BTECH</pre>
        <br></br>
        <b>BTECH-COIMBATORE</b>                                                                               <span class="sp">22-6-2019</span>      
       <br></br >
    
                 <pre id='margin'>BTECH,CSE-IT <br></br>
    
                  BFA<br></br></pre>
    </pre>
    <h2>HONORS & AWARDS</h2>
    <hr></hr>
    <pre id="name3">
       <b>STUDENT OF THE YEAR</b>                                                                            <span class="sp">2017</span>                      
    </pre>
    <h2>RESEARCH EXPERIENCE</h2>
    <hr></hr>
    <pre id="name3">
       <b>TECH.SOL</b>                                                                                                        <span class="sp">2016</span>                                                                
       <pre id="margin">
           GO CARGO:
           <br></br>
            <ul>
                <li> The project is about current shipping issues</li>
                <li>Team:ME,MY FRIEND,ANOTHER FRIEND</li>
                </ul> 
       </pre>
    </pre>
    <h2>PRESENTATIONS</h2>
    <hr></hr>
    <pre id="name3">
       <b>ABS-AVINASHI ROAD</b>                                                                                 <span class="sp">2019</span> 
       <br></br>
       <b>RAJ BHAVAN-TOWN HALL</b>                                                                        <span class="sp">2018</span>                        
    </pre>
    
    </div>
,
    document.getElementById('root')
  );
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();