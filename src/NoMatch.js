/*import React from 'react';
export const NoMatch = () => (
  <div>
    <h2>No Match</h2>
  </div>
)*/

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
class NoMatch extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    No Match
                </h2>
            </div>
        );
    }
}
export default NoMatch;