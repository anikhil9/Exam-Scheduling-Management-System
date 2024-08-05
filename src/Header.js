import React from 'react';
import './index.css';
import Body1 from './Body1';
function Header(){
    return(
        <div>
        <form>
          <label>
            Employee ID:
             <input id="name1" type="text" name="Employee ID" />
          </label>
        </form>
        </div> ,    
        <Body1 />
    );
}
export default Header;