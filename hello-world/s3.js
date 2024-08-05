const express = require('express')
const app = express()
const formidable = require('formidable')
const AWS= require('aws-sdk');
const fs= require('fs');
const path= require('path');


AWS.config.update({
    "accessKeyId":"ASIAWGT2NK6DQXDMVJMI",
        "secretAccessKey":"nfzcNlUs1Rh/LWCaWZbLmNKROMxST4uwxOJFMGMW",
        "sessionToken":"FQoGZXIvYXdzEPL//////////wEaDBxMhVJc/t4OHjEBcyL8BP6cvY9gvfPDICxjovEAmVGWNpEfjdHej8AMJLQHj671HTcsJe+6S22nlhJ4chT/GoN+Me+i4jsyYXV8McS4odhX5NkkJRaSvptrIeYuaCjuVVGSL9v/qDWSwJUkHFr0xUpVj4TRLvYNcP628R64mZvtDyXDj1xEzyQS42VHjWwe0hgicoDAVpBAZMWsZDih1BSIWddHXrkBKhb/JuKdrEjGAql8xckH9fh0bS6B4CADe2Dyufi7WnSX+ZrgWGUSEnGslA+jyFgk7w7gtVIu2zqpKpJyL47OAk6mBMTXSdbSTZjMA/2+Oate4aDVt5pt70s27+3RITXjJHQT6HstP6bQ2GFi8YCk2JIpuVfGoQNA5cA9zFCA3BZ+aLTWh3In8D7oFsxoLBGmRI2bi8doELkrb5QfTtEB9VLnxGmqJtq8nk74sL38dtBqP78UvJRua8UHJBFpnMHU7HIQjhydZZvpLApqLE5o1QsbQS4WghiUg34flNLXHKKvOupuKKxVmGvHzy6h0Xy+Pcsvc3e7UTl3kDHeuZWQkRjAF221bKtLYAQnVpJxR5k39hY1zSuOqr6UmgkBwX9luEk9kLtoDWwGSKia9hW+inroDZ0ro/RAlAHj5/j4O9w2frB+EsP0p36X9n0wUdUJIkoMeGRmUKnN37YsWlw1OK2VYoRLxDwSesDiuwlh/QTsT3ICUgvjIUOXvZF2mzL/+5oJ2p4Vo7k9CuGxIe7gIg9U4LHg292nT345c7gSjlMyNDdMhYr5gGYQiHHoBwJ2WuDNIR0Itf8VA4lFELJ/zMq8CVlb4bkHgtHcArHWp1/sC7LzvxWXKVjTwxvsE0oQP+wM7yjkiObqBQ=="
        ,
        "region":"US East (N. Virginia)"
    })

var s3 = new AWS.S3({apiVersion: '2006-03-01'});

app.post('/abc', (req, res) => {
    new formidable.IncomingForm().parse(req) .on('fileBegin', (name, file) => {
        var filepath = './data/' + file.name;
        res.write("upload fine");

        var params={
            Bucket :'cloudbucketprac',
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
        res.end();
    })
   // var filepath = __dirname + '/uploads/' + file.name;

   
    
    
    
})
.listen(9000);
console.log("server listening in http://localhost:9000/abc");