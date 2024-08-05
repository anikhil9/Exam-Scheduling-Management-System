var http = require('http');
var url = require('url');
var mysql = require('mysql');
const AWS  = require('aws-sdk');
const fs = require('fs');
const path= require('path');


var redir = false;
var length = 0;
var length2 = 0;

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url,true).query;
    res.write('<br/>'+ q.Username + '<br/>' + q.Password +  '<br/>' + q.type + '<br/>');


    var connection = mysql.createConnection({
      host     : "localhost",
      user     : "root",
      password : "Allaasant2527$",
      port     : "3306",
      database : "DBMS"
    });



    var records = [[q.Username,q.Password,q.type]];

    if(records[0][0]!=null)
    {
    connection.query("INSERT INTO DBMS1(un,pwd,des) VALUES ?", [records], function (err, result, fields) {
    
    if (err) throw err;
    
    console.log(result);
    });
    }
    

    connection.connect(function(err) {
        if (err) {
          console.error('Database connection failed: ' + err.stack);
          return;
        }
        console.log('Connected to database.');
    });


     /*connection.query('SELECT * from Cloud1', function (error, results, fields) {
        if (error) throw error;
        length=results.length

        for(i=0;i<length;i++)
        {
            console.log('\nThe solution is: ', results[i].days);
        }


        /*if(length > 0)
        {
          console.log('redir enter days');
          redir= true;
        }

      
      });

      connection.query('delete from data1 where days>30;',function (error2,temp,feilds2){
        if (error2) throw error2;
      });
      


      connection.query('select * from data1 where da>(SELECT CONVERT(NOW(), DATETIME));', function (error, results, fields) {
        if (error) throw error;
        length2=results.length;

        for(i=0;i<length2;i++)
        {
            console.log('\nThe solution is: ', results[i].days);
        }


        if(length2 > 0)
        {
            console.log('redir enter date');
          redir= true;
        }

      });

      if(redir == true)
      {
        res.write('\n hello : '+ redir);
      }
      
      res.end();  


      connection.query('delete from data1 where da>(SELECT CONVERT(NOW(), DATETIME));',function (error2,temp,feilds2){
        if (error2) throw error2;*/
        //console.log('deleted'+ temp);

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
          {
              console.log('\nThe solution is: ', results[i].un , results[i].pwd);
          }  
      });
     
   

    
    connection.end();

}).listen(8081);



/*

if(records[0][0]!=null)
    {
    connection.query("INSERT INTO Student(student_ID,student_name) VALUES ?", [records], function (err, result, fields) {
    
    if (err) throw err;
    
    console.log(result);
    });


     connection.query('SELECT * from Student', function (error, results, fields) {
        if (error) throw error;
        var length=results.length
      
        for(i=0;i<length;i++)
        {
            console.log('\nThe solution is: ', results[i].student_ID , results[i].student_name);
        }  
    });

    }*/ 