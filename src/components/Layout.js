import React from 'react';
import  Container  from 'react-bootstrap';

/*export const Layout = (props) => (

  <Container>

    {props.children}

  </Container>

)*/

class Layout extends React.Component{
    render(){
        return(
            <Container>

    {props.children}

  </Container>
        );
    }
}
export default Layout;