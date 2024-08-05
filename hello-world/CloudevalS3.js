var http = require('http');
var url = require('url');
var mysql = require('mysql');
const AWS  = require('aws-sdk');
const fs = require('fs');
const path= require('path');


AWS.config.update({
    "accessKeyId":"ASIAWGT2NK6DS75NSIEP",
    "secretAccessKey":"OkV4gLG+P6W3WTZELNnmyXRfAnxBEJ7UuAMeME33",
    "sessionToken":"FQoGZXIvYXdzEKv//////////wEaDGdHJEbHKbrwQ5vTLCKWAqMCf5tQrtojVUR+/ECknF07eJ7EpVRMJ7afmu7WImnBbZlGqbGZ1WuzvKXZgnyf8NVS5kEtkviSvcqBCJduH1KwadNfezByIXJnK8e7epMXKanLEMbOPj/Qz1ONdORyhvxzj94fTtxuTqgRniHJvS+9Nn7EOZUexE5R0e5rhn93ay/wZAAkspV5uorfKZiVvEkr+yJvNwZsi4mSpIP1HRl5Sj/qNz5HoOo3KJLYPJJ0ifGGUYP6x4hIyaTqzs5/vbFRum24zJBhmp4AhIs2mHI2Y5HN0BE8sy3xfweLS/Z9TOmH/G53O5BxtGlwjS7CSWEKr79ITAzQ+ap+K74pGj3yngeRT6yxW4h14akVDPNEgQahDFeCKKXMjusF",
    "region":"us-east-1"
    })


    

var redir = false;
var length = 0;
var length2 = 0;

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url,true).query;
    res.write('<br/>'+ q.HouseNo + '<br/>' + q.HouseName + '<br/>' + q.Zipcode );
    console.log(q.loc);

    function qu(){


      var connection = mysql.createConnection({
        host     : "127.0.0.1",
        user     : "root",
        password : "Allaasant2527$",
        port     : "3306",
        database : "Cloud"
        });
    
    
    var records = [[q.HouseNo,q.HouseName,q.Zipcode]];

    if(records[0][0]!=null)
    {
    connection.query("INSERT INTO Cloud1(un,pwd,des) VALUES ?", [records], function (err, result, fields) {
    
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

    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
      console.log('Connected to database.');
  });


   connection.query('SELECT * from Cloud1', function (error, results, fields) {
      if (error) throw error;
      var length=results.length
    
      for(i=0;i<length;i++)
      {
          console.log('\nThe solution is: ', results[i].un , results[i].pwd);
      }  
  });




  connection.end();
}


    function qu2(){
      if((length === 0) && (length2 === 0))
      {
        var s3=new AWS.S3({apiVersion:'2006-03-01'});
        var filepath="./data/image.txt"+q.loc;
        var params={
        Bucket:"cloudevals3",
        Body: fs.createReadStream(filepath),
        //Key:"Data1/"+path.basename(filepath),
        Key:path.basename(filepath),
        }
        s3.upload(params,function(err,data)
        {
          if(err)
          {
            console.log("Error",err)
          }
          if(data)
          {
            console.log("Success")
          }
        })
      }
      else
      {
        console.log("redir == false");
      }
      
     
    }
    

    qu();



    setTimeout(qu2, 20000);






}).listen(8080);

        /*var records = [[q.entdate,q.days,q.country,q.sta]];
    
        if(records[0][0]!=null)
        {
        connection.query("INSERT INTO data1 (da,days,country,state) VALUES ?", [records], function (err, result, fields) {
        
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
    
    
         connection.query('SELECT * from data1 where days>30', function (error, results, fields) {
            if (error) throw error;
            length=results.length
    
            for(i=0;i<length;i++)
            {
                console.log('\nThe solution is: ', results[i].days);
            }
    
    
            // if(length > 0)
            // {
            //   console.log('redir enter days');
            //   redir= true;
            // }
    
          
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
    
    
            // if(length2 > 0)
            // {
            //     console.log('redir enter date');
            //   redir= true;
            // }
    
          });
    
          res.end(); 
    
    
          connection.query('delete from data1 where da>(SELECT CONVERT(NOW(), DATETIME));',function (error2,temp,feilds2){
            if (error2) throw error2;
            //console.log('deleted'+ temp);
          });
    
       
    
        
        connection.end();





    }*/
