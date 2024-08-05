var express = require('express');

//var bodyParser = require('body-parser');
var app = express();
/*
var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine','ejs');
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/contact', urlencodedParser, (req, res) => {
    res.send('this is contact');
    console.log(req.body);
    res.render('con-suc', {data: req.body});

});

app.get('/prof/:name', function(req,res){

    res.render('prof', {person: req.params.name});
});
*/
var validator = require('validator');
 

/*var temp = validator.isEmail('foo@bar.com');

var Path = require('path');

var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/',function(req,res){

    res.sendFile('temp.html',{root: Path.join(__dirname,'./htmlprog')});
});

app.post('/',function(req,res){

   // res.sendFile('temp.html',{root: Path.join(__dirname,'./htmlprog')});
    res.end(JSON.stringify(req.body));


});*/

var express = require('express');
var app = express();
var upper=require("upper-case");
app.use(express.urlencoded());

app.post('/', function (req, res) {
    
    var Name = req.param('Name', null)
    var Age = req.param('Age',null)
   /* if(username == 'satvik' && psw == '12345'){
        res.send("successfull login :) " + '<br/>' + "welcome , " + upper(username));
    }
    else{
        res.send("failure login");
    }
    // res.send(username);*/


    if(validator.isAlpha(Name))
    {
        res.send(Name+'  '+Age);
    }
    else
    {
        res.send('not valid');
    }
});
app.listen(8081);

//Run app, then load http://localhost:port in a browser to see the output.