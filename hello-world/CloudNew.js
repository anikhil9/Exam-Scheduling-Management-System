const express = require('express')
const app = express()
const formidable = require('formidable')
const AWS= require('aws-sdk');
var mysql = require('mysql');
const fs= require('fs');
const path= require('path');
app.use(express.urlencoded());

var connection = mysql.createConnection({
    host     : "database-2.cbyuwgobnc65.us-east-1.rds.amazonaws.com",
    user     : "admin",
    password : "Allaasant2527$",
    port     : "3306",
    database : "Cloud"
  });
    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
      console.log('Connected to database.');
  });
  
AWS.config.update({
    "accessKeyId":"ASIAWGT2NK6DRWI26JN6",
    "secretAccessKey":"0FdG2rWY2+Nyu8SJVSGbkrbv6Ev0cIcCKecmxz2+",
    "sessionToken":"FQoGZXIvYXdzEP7//////////wEaDHk0STUCfj4L4AGYLSL8BEia5WDC8BlutvNJ8daiu4msm7Cg9tQ2uGdzYG7Kb7EM/qFARrRxMrmyW7w8suynb2o1hrdo3rM+2A/bNd5zzg3VOW/KALTyZ3XMXpCeD6Ajpn1/ZJl7541kElTOf0UWs+BWIvIeBOeHf13k8bHquSTgGsPVogT35jlHDXvONliKRnNcr9gFNYNdr4tZleixULbCzY2TDURQkIYUivGaU9HA3615pDqFS/qUbq6yZ4lGpDHsxEKs/RySlwLr77048QGWNwzb3lk1Mp2X5obHKEx1kjGtXS1LbD+9AUfTAr2uG8/Hn86hGivLm7OABEXuDhUKEoQXFbV364q1ZtwDgwRYegXUcIwxqBHacjERZC/ENO/5RZZJu6GtT9e/nm0UCFFjpxNweiKYkdvAh9IOp9kXJODARGdGJqd2lgl8QMMhyEf+pvPlTSMxMBFPDVZXGMakoMFVPW7nCTL2I2MgQfV0M3RlW88a+7J8quYfhVTkr7sZWh/BQjcU2sc2uMsS+Jb/4hfrvYKP7YfLvPaboDWTnXdddvEQGjL2btuptVddgwJFVqY3QdwAJRUPUNsCdl42cNUgvrxBRwt6w6OLPosbuksOeHGdcF6XSWbui/+zv8t2l7YT+4j9YAKHQEz7fC1PEcmRBixHEvmpFIlgtR43zvX+hy218CQ1cvqdNd/iEj7Uak9YafoENWWq9Gej04UaYzyW2SPn6vYQCdTzDzPyl8OeU6anBqqXCAGwpDfm5LNKfCG7YlWbjN0dkS+X81nVJbnktI8qeWfOUWDZXQoF2R4DWI0x5DZ3BihJZjXYaxLeK7N06a/HUa8r4BwDFkDhy62jQoVomUOM0Siq2+jqBQ==",
    "region":"us-east-1"
    })

    var s3=new AWS.S3({apiVersion:'2006-03-01'});

    var bucketParams ={
    Bucket :"cloudbucketprac1",
    ACL:'public-read'
    };
    
    s3.createBucket(bucketParams,function(err,data)
    {
        if(err)
        {
            console.log("Error",err);
        }
        else
        {
            console.log("Succes",data.Location);
        }
    }
    )

app.post('/abc', (req, res) => {

    var un = req.param('Username', null)
    var pwd = req.param('Password',null)
    var des = req.param('type',null)

    connection.query('SELECT * from Cloud1', function (error, results, fields) {
        if (error) throw error;
      
        var length=results.length;
        var test=0;
      
        for(i=0;i<length;i++)
        if(results[i].Username == un && results[i].Password == pwd && results[i].type == des)
        test=1;
    
        if(test == 1){

        res.send("Congratulations Login Success");

        fs.appendFile('D:/Cloud/my-app/hello-world/Cloud.txt',un+pwd+des, function (err){
            if(err) throw err;

        //    res.send("saved");
        else{
            var s3 = new AWS.S3({apiVersion: '2006-03-01'});
            var filepath="./Cloud.txt";
            
            var params={
                Bucket :'cloudbucketprac1',
                Body:fs.createReadStream(filepath),
                Key:"Data1/"+path.basename(filepath),
            };
            
            s3.upload(params ,function (err,data){
                if(err){
                    console.log("error",err);
                }
            
                if(data){
                    console.log("Uploaded in:",data.Location);
                }
                
            });
        }
        });
       
        }
        else{
        res.send("Login Failure try again!!");
        }

        // var s3 = new AWS.S3({apiVersion: '2006-03-01'});
        // var filepath="./data/upload.txt";
        
        // var params={
        //     Bucket :'satviksample',
        //     Body:fs.createReadStream(filepath),
        //     Key:"Data1/"+path.basename(filepath),
        // };
        
        // s3.upload(params ,function (err,data){
        //     if(err){
        //         console.log("error",err);
        //     }
        
        //     if(data){
        //         console.log("Uploaded in:",data.Location);
        //     }
            
        // });

        res.end();
    
      }); 

    
    // fs.appendFile('G:/react1/my-app/src/node/data/upload.txt',username+psw, function (err){
    //     if(err) throw err;
    //    res.write("saved");  
       
    // });
    


 
// var s3 = new AWS.S3({apiVersion: '2006-03-01'});
// var filepath="./data/upload.txt";

// var params={
//     Bucket :'satviksample',
//     Body:fs.createReadStream(filepath),
//     Key:"Data1/"+path.basename(filepath),
// };

// s3.upload(params ,function (err,data){
//     if(err){
//         console.log("error",err);
//     }

//     if(data){
//         console.log("Uploaded in:",data.Location);
//     }
//     res.end();
// });
    
    
    
})
.listen(8080);
console.log("server listening in http://localhost:8080");