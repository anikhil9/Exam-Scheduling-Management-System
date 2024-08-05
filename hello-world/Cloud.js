var http = require('http');
var url = require('url');
var mysql = require('mysql');
const AWS  = require('aws-sdk');
const fs = require('fs');
const path= require('path');

AWS.config.update({
    "accessKeyId":"ASIAWGT2NK6D7XHG77NG",
    "secretAccessKey":"lM/RMyoT3XZcgWDY8RV4vih8R3kbvm/o2KrFRE+I",
    "sessionToken":"FQoGZXIvYXdzEEUaDBv+k2a72Vq+T3LeqiKWAo4oHf/RUruA7tGBQIf40ODjOD851VCOy9KgU42OZeUJbfBHKgpJkWUwHtec/4PuDpIKPFGVZREafSopv5/PLOa1a6irfrDK+D31YLs7W5oKRaO0hX/1SJbtsRkIWicSrgf5ccvhZY5+ezRZG9FBPEsIQpovYdn3QpASlQ3jff6Htna0eHwxx1tKVxG78Tj7jR/LzYRHsV5mPtZyLCJwPFbtCBsmCXZE7ylwKKlkb1ybHqop0Bng/3A4tsUaQqpXl56JMiVIE7fuDpUKJFDAtUpUBYBPq/7UB5Xb0oBg7na/Z/syHV0yQpJBlsBNsiRhpuUfdNP+N3oJ1APpAOG2s+Jprej3y6jVw4DDLk0Y8ks0D7AcGjo+KNme+OoF",
    "region":"us-east-1"})

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write(req.url);  
    var q = url.parse(req.url,true).query;
   // var txt = q.entdate;
    // var txt1 =  q.days;
       res.write('<br/>'+ q.HouseNo + '<br/>' + q.HouseName + '<br/>' + q.Zipcode);

    var connection = mysql.createConnection({
        host     : "database-2.cbyuwgobnc65.us-east-1.rds.amazonaws.com",
        user     : "admin",
        password : "Allaasant2527$",
        port     : "3306",
        database : "Cloud"

    });
    var s3=new AWS.S3({apiVersion:'2006-03-01'});
    var filepath="./data/"+q.loc;
    var params={
    Bucket:"pracbucket2567",
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

    });

    var records = [[q.HouseNo,q.HouseName,q.Zipcode]];

    if(records[0][0]!=null)
    {
    connection.query("INSERT INTO Cloud1(un,pwd,des) VALUES ?", [records], function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    if(des==90210)
    {
        des='Bevery Hills';
    }
    else if(des==94016)
    {
        des='Daly City';
    }
    else if(des==10001)
    {
        des='New York';
    }
    else (des==14201)
    {
        des='Buffalo';
    }
    // if there is no error, you have the result
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


     connection.query('SELECT * from Cloud1', function (error, results, fields) {
        if (error) throw error;
        var length=results.length
      
        for(i=0;i<length;i++)
        {
            console.log('\nThe solution is: ', results[i].un , results[i].pwd , results[i].des);
        }

    
         
      res.end();  

      
       
      
      
      
      
      });
   

    connection.end();

}).listen(8080);

/*AWS.config.update({
    "accessKeyId":"ASIAWGT2NK6D4VGONLPM",
    "secretAccessKey":"kHDymSQ8QgnHp2O8grVYw5fQ1pum9YYoWo6D/Rh6",
    "sessionToken":"FQoGZXIvYXdzEAIaDPbZHPI3HgpifSwpjyL8BFqqxEQMfzjQ9h4mJJzo4RYasgRmlNj+DZoxH+DGlRcU5gE3dIJZKHVMuYMHLUyPN6622+ySIArFkryM/IBXK55ROoGT6UZMpILhVV712OXBw4r+XbWbTHszAKGjd1YzF2lWhYj+a5W1ijoOP4W9PPPBiPbSvRGv71XdOmhZNGQEn67r6eTJ0oLh8yq5W6JsllSIFJhvAmetdE/dD4jrU27uXTv8N2ZaL9U2PdbPNkxhTc1WY/yccMvlxyUQRNZQleFSm5jjmadFRH+lQOzGtEmWZKCYLLSVUGQj7nq/fPbO1Giu+ZuPmesKhHfFkAD5woSxARBADhFeYSc1d6DkeqvGPea7hSZuS+5hCow4jX63juP53eZs2vpmbhcjpUMkKCPj8w4VJb3X0zPZzKLC57VhipmRvyBZ5hG7ajmb6bAKB5sp5OlUl62HJUykT2bXmfZD1ODGG8L8BlepY/tZ91q32Tm4lhEYCrtUqXvx4LC2VCB5nUQ77S0p+6Sq0q0Nxy9rc/tlB2lVGDwnbpU5z/rG7R73P6I5haC6I6eRJKe1c6kmGKbjBIDHl8jnf9vn0Tgmq+496L1l9XD3V/vy/WSXIf5XTS94oGXDqq1J9cuGHfpm8Ad9FXjI5Hqa9S2r+67UFtq2ZpoJzZ7q8rzQVzHs4wWmIEe7SweQ4CPhPnHSJ7ryYmN96AdRrffEyLXb6RpOJnC/6qkFNxxhBl4oNN5yqTkgwZFQrtK0NRUsDpObr3Md21C1wCLZB7tEVYTkkBxDskQZDO240HIQt6v7hWxJEPyvnitgusfM8kxu8Ax066KF5+/y91sOCmseebb+oNZEuJIu4QhsF9cq2SjUv+nqBQ==",
    "region":"us-east-1"
    var s3=new AWS.S3({apiVersion:'2006-03-01'});
       var filepath="./data/"+q.loc;
       var params={
       Bucket:"cloudbucketexam",
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
    }) */