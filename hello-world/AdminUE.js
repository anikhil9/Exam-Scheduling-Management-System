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
    var EI=req.body.EI
    var ET=req.body.ET
    var ED=req.body.ED
    var type=req.body.type1
    var login_success=0
    var p=req.body.p
    console.log(EI);
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
    var sql = "UPDATE Exam set exam_time=? , exam_date=?  WHERE  exam_ID= ?";
 
    var query = connection.query(sql, [ET , ED , EI], function(err, result) {
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
         
        // var sql = "DELETE from Exam WHERE exam_ID = ?";
         
        // var query = connection.query(sql, [EI], function(err, result) {
        //     console.log("Record Deleted!!");
        //     console.log(query);
        //});
        connection.query("DELETE from Exam WHERE exam_ID='"+EI+"'", function (error, results, fields) {
            if (error) throw error;
            var length=results.length
       });
    }
    res.send('Success');
});

app.listen(8182);   