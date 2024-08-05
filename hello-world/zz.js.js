var mysql = require('mysql');
var express = require('express');
var app = express();
app.use(express.urlencoded());
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "Allaasant2527$",
    database : "DBMS",
    port:"3306",
    insecureAuth : true
  });
const httpProxy =require('http-proxy');
const proxy = httpProxy.createServer({});
  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
});

connection.query('SELECT * from DBMS1', function (error, results, fields) {
  if (error) throw error;
  var length=results.length

  for(i=0;i<length;i++)
  app.post('/', function (req, res) {
    var username= req.param('Username', null)
    var password= req.param('Password', null)
    var type= req.param('type', null)
    var flag=0;
    for(i=0;i<length;i++)
    {
    if(username==results[i].un)
    {
       if(password==results[i].pwd)
         {
            if(type==results[i].des)
            {
              console.log('\nThe solution is: ', results[i].un , results[i].pwd);
              if(type=="Admin")
              {
                flag=2;
              }
              else if(type=="Student")
              {
                flag=1;
              }
              else if(type=="Teacher")
              {
                flag=3;
              }
             }
          }
     }
    }
    if(flag==2)
    {
        //  open('https://www.google.com',function(err){
        //    if(err)throw err;
        //  });
         res.send('Admin Portal');
  //  res.write('<br/>'+ username + '<br/>' + password);
    }
    else if(flag==1)
    {
      res.send('Student Portal')
    }
    else if(flag==3)
    {
      res.send('Teacher Portal')
    }
    else
    res.send('Authenatication Not Valid');
});
});
app.listen(8080);
connection.end();

