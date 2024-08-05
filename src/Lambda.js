import React from 'react';

var StyleDiv =
{
    border: '2px solid grey',
    padding: '30px',
    marginLeft: '300px',
    marginRight: '300px',
};
var styleDiv1 =
{
    border: '2px solid white',
    padding: '30px',
    marginLeft: '300px',
    marginRight: '300px',
    paddingLeft: '400px',
    backgroundColor: 'grey',
    align: 'center',
};
class Sam extends React.Component {
    render() {
        const btnStyle = {
            backgroundColor: '#0e8675',
            color: 'white',
            width: '150px'
        };
        return (
            <div class="container ml-5 mr-5 mt-3 mb-5">
                <h1><center>Restaurant ordering</center></h1>
                <form action=" https://3bplop1zf0.execute-api.us-east-1.amazonaws.com/clem/clemres" method="get" encType="multipart/form-data">
                    <div class="form-group">
                        <input type="text" value="c" name="type" hidden></input>
                        <center>
                            <input type="text" class="form-control ml-1" name="name" placeholder="Enter Item ID" ></input>
                            <br></br>
                            <input type="number" class="form-control ml-1" name="cost" placeholder="Enter Number of Items" ></input>
                            <br></br>
                            <center><button type="submit" class="btn" style={btnStyle}>Submit</button></center>
                        </center>

                    </div>
                </form>
                <center>
                <h1>View Items</h1>
                </center>
                <form action="https://3bplop1zf0.execute-api.us-east-1.amazonaws.com/clem/clemres" method="get" encType="multipart/form-data">
                    <div class="form-group">
                        <input type="text" value="d" name="type" hidden></input>
                        <center>
                            <input type="text" class="form-control ml-1" name="type" value="r" hidden></input>
                            <br></br>
                        </center>
                    </div>

                    <center><button type="submit" class="btn" >View All Items</button></center>
                </form>
                <br></br>
                <center>
                <h1>Delete Item</h1>
                </center>
                <form action="https://3bplop1zf0.execute-api.us-east-1.amazonaws.com/clem/clemres" method="get" encType="multipart/form-data">
                    <div class="form-group">
                        <input type="text" value="d" name="type" hidden></input>
                        <center>
                            <input type="text" class="form-control ml-1" name="id" placeholder="Enter id" ></input>
                            <br></br>
                            <center><button type="submit" class="btn" >Submit</button></center>
                        </center>
                    </div>

                    
                </form>
            </div>

        );
    }
}
export default Sam;