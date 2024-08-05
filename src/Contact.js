/*import React from 'react';
export const Contact = () => (
  <div>
    <h2>Contact Us</h2>
  </div>
)

<p class="C2">
                      <p>Email</p> <p class="p2">:</p><p class="p3">techspringsEI@gmail.com</p>       
                </p>*/

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
class Contact extends React.Component{
    render(){
        return(
            <div class="b">
                <h2 class="C1">
                    Contact Us
                </h2>
                <pre class="C2">
                    Email          :  techspringsEI@gmail.com
                </pre>
                <pre class="C2">
                    Telephone      :  0864 265 5000
                </pre>
                <pre class="C2">
                    Founder        :  Osama
                </pre>
                <pre class="C2">
                    Founded        :  1964
                </pre>
                <pre class="C2">
                    Address        :  St-No:-4,Brindavan Nagar,Coimbatore                
                </pre>
                <pre class="C2">
                    State          :  TamilNadu,,Postal-(64112)               
                </pre>
                <pre class="C2">
                    Website        :  www.techspringsEI.in               
                </pre>

            </div>
        );
    }
}
export default Contact;