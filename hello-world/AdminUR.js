var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var app= express();
var bodyParser = require("body-parser")
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
var connection = mysql.createConnection({
      host     : "localhost",
       user     : "root",
       password : "Allaasant2527$",
       database : "DBMS",
       port:"3306",
       insecureAuth : true
  });
connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
});
app.post('/', function (req, res) {
    var RI=req.body.RI
    var Sec=req.body.Sec
    var RD=req.body.RD
    var type=req.body.type
    var login_success=0
    var p=req.body.p
    console.log(RI);
     if(type=="Update")
    {
    //   connection.query('update Room set sec=Sec ,room_deatils=RD where Room.room_ID=RI', function (error, results, fields) {
    // });
    // con.connect(function(err) {
    //     if (err) throw err;
    //     var sql = "UPDATE Room SET sec=Sec ,room_deatils=RD WHERE Room.room_ID=RI";
    //     con.query(sql, function (err, result) {
    //       if (err) throw err;
    //       console.log(result.affectedRows + " record(s) updated");
    //     });
    //   });
    console.log('Into Update.');
    var sql = "UPDATE Room set sec=? , room_deatils=?  WHERE  room_ID= ?";
 
    var query = connection.query(sql, [Sec , RD , RI], function(err, result) {
    console.log("Record Updated!!");
    console.log(query);
});
    }
    else if(type=="Delete")
    {
        console.log("Into Delete");

        var sql1 = "SET SQL_SAFE_UPDATES = 0";

        var query1 = connection.query(sql1, function(err, result) {
            console.log("Selected!!");
            console.log(query);
        });
        console.log(query1)
         
        var sql = "DELETE from Room WHERE room_ID = ?";
         
        var query = connection.query(sql, [RI], function(err, result) {
            console.log("Record Deleted!!");
            console.log(query);
        });
    }
});

 app.listen(8181);   