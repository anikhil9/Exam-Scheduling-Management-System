import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './s.css';
class Home extends React.Component{
    render(){
        return(
            <div>
                <h1 class="H1">
                    Welcome
                </h1>
                <h2 class="H2">
                    To
                </h2>
                <h2 class="H3">
                    Tech Springs
                </h2>
            </div>
        );
    }
}
export default Home;