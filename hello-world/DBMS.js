// var mysql = require('mysql');
// var express = require('express');
// var app = express();
// var bodyParser = require("body-parser")
// var cors = require('cors');
// app.use(cors());
// app.use(bodyParser.urlencoded({extended:false}))
// var connection = mysql.createConnection({
//     host     : "localhost",
//     user     : "root",
//     password : "Allaasant2527$",
//     database : "DBMS",
//     port:"3306",
//     insecureAuth : true
//   });
// const httpProxy =require('http-proxy');
// const proxy = httpProxy.createServer({});
//   connection.connect(function(err) {
//     if (err) {
//       console.error('Database connection failed: ' + err.stack);
//       return;
//     }
//     console.log('Connected to database.');
// });

// connection.query('SELECT * from DBMS1', function (error, results, fields) {
//   if (error) throw error;
//   var length=results.length
//  console.log("hi");
//   for(i=0;i<length;i++)
//   app.post('/', function (req, res) {
//     var username= req.body.Username
//     var password= req.body.Password
//     var type= req.body.type
//     console.log(username);
//     console.log(password);
//       console.log(type);
//     var flag=0;
//     var login_success=0;
//     for(i=0;i<length;i++)
//     {
//     if(username==results[i].un)
//     {
//        if(password==results[i].pwd)
//          {
//             if(type==results[i].des)
//             {
//               console.log('\nThe solution is: ', results[i].un , results[i].pwd , results[i].des);
//               if(type=="Admin")
//               {
//                 flag=2;
//               }
//               else if(type=="Student")
//               {
//                 flag=1;
//               }
//               else if(type=="Teacher")
//               {
//                 flag=3;
//               }
//              }
//           }
         
//      }
//     }
//     console.log(flag);
//     if(flag==2)
//     {
//         //  open('https://www.google.com',function(err){
//         //    if(err)throw err;
//         //  });
//          //res.send('Admin Portal');
//          console.log('valid Admin Portal');
//                   login_success=1;
//                   res.send({log : login_success })
//                      res.end()
//   //  res.write('<br/>'+ username + '<br/>' + password);
//     }
//     else if(flag==1)
//     {
//       //res.send('Student Portal')
//       console.log('valid Student Portal');
//                   login_success=1;
//                   res.send({log : login_success })
//                      res.end()
//     }
//     else if(flag==3)
//     {
//       //res.send('Teacher Portal')
//       console.log('valid Teacher Portal');
//                   login_success=1;
//                   res.send({log : login_success })
//                      res.end()
//     }
//     else
//     res.send('Authenatication Not Valid');
// });
// });
// app.listen(8080);





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
    var username=req.body.Username
    var password=req.body.Password
    var type=req.body.type
    var login_success=0
    var p=req.body.p
    console.log(username);
 console.log(password);
 console.log(type);
     if(type=="Student")
    {
      connection.query('SELECT * from DBMS1', function (error, results, fields) {
        if (error) throw error;
        var length=results.length
        var flag=0;
        for(i=0;i<length;i++)
        {
            
            console.log('\nThe solution is: ', results[i].un , results[i].pwd);
            if(username==results[i].un)
            {
                if(password==results[i].pwd)
                {
                    flag=1;
                }
            }
           

            }
            if(flag==1)
            {
              console.log('valid');
              login_success=1;
              res.send({log : login_success })
                 res.end()
            }
            else{
              console.log(' not valid');
              res.send({log : login_success})
                res.end();  

        }
    });
    }
    else if(type=="Faculty")
    {
    connection.query('SELECT * from DBMS1', function (error, results, fields) {
            if (error) throw error;
            var length=results.length
            var flag=0;
            for(i=0;i<length;i++)
            {
                
                console.log('\nThe solution is: ', results[i].un , results[i].pwd);
                if(username==results[i].un)
                {
                    if(password==results[i].pwd)
                    {
                        flag=1;
                    }
                }
          
            }
            if(flag==1)
            {
              console.log('valid');
              login_success=2;
              res.send({log : login_success })
                 res.end()
            }
            else{
              console.log(' not valid');
              res.send({log : login_success})
                res.end();  

            }
        });
    }
    else if(type=="Admin")
    {
    connection.query('SELECT * from DBMS1', function (error, results, fields) {
            if (error) throw error;
            var length=results.length
            var flag=0;
            for(i=0;i<length;i++)
            {
                
                console.log('\nThe solution is: ', results[i].un , results[i].pwd);
                if(username==results[i].un)
                {
                    if(password==results[i].pwd)
                    {
                        flag=1;
                    }
                }
                
            }
            if(flag==1)
                {
                  console.log('valid');
                  login_success=3;
                  res.send({log : login_success })
                     res.end()
                }
                else{
                  console.log(' not valid');
                  res.send({log : login_success})
                    res.end();  
    
                }
        });
    }
  if(p==1)
  {
var name=req.body.name
console.log("ko");
    connection.query('SELECT * from Student', function (error, results, fields) {
      if (error) throw error;
      var length=results.length
      var flag=0;
      for(i=0;i<length;i++)
      {
          
          console.log('\nThe solution is: ', results[i].student_name , results[i].student_ID);
          if(name==results[i].student_ID)
          {
            var P_ID=results[i].program_ID1
            //var P_ID2=results[i].program_ID1
            var F_ID=results[i].faculty_ID1
            var Sem=results[i].sem
            var S_Name=results[i].student_name
            var S_ID=results[i].student_ID

            console.log(P_ID);
            connection.query('SELECT * from Program', function (error, results, fields) {
              if (error) throw error;
              var length=results.length
              var flag=0;
              for(i=0;i<length;i++)
              {
                  
                  console.log('\nThe solution is: ', results[i].program_ID , results[i].program_name);
                  if(P_ID==results[i].program_ID)
                  {
                    var P_ID2=results[i].program_ID;
                    var P_name2=results[i].program_name;
                    //var pname=req.body.program_ID
                    // res.send({P_ID2:results[i].program_ID ,  P_name:results[i].program_name , F_ID , Sem , S_Name , S_ID })
                    // res.end();


                     connection.query('SELECT * from Faculty', function (error, results, fields) {
                       if (error) throw error;
                       var length=results.length
                       var flag=0;
                       for(i=0;i<length;i++)
                       {
                          
                           console.log('\nThe solution is: ', results[i].faculty_ID , results[i].faculty_name);
                           if(F_ID==results[i].faculty_ID)
                           {
                             //var pname=req.body.program_ID
                             var F_ID2=results[i].faculty_ID;
                             var F_name=results[i].faculty_name;
                             //res.send({F_ID2:results[i].faculty_ID ,  F_name:results[i].faculty_name , Sem , S_Name , S_ID ,  P_ID2  , P_name2})
                             //res.end();

                             connection.query('SELECT * from Subject', function (error, results, fields) {
                              if (error) throw error;
                              var length=results.length
                              var flag=0;
                              for(i=0;i<length;i++)
                              {
                                 
                                  console.log('\nThe solution is: ', results[i].subject_ID , results[i].subject_name , results[i].faculty_ID2);
                                  if(F_ID==results[i].faculty_ID2)
                                  {
                                    //var pname=req.body.program_ID
                                    var SubI=results[i].subject_ID
                                    var SubN=results[i].subject_name
                                    // res.send({SubI , SubN , F_ID2 ,  F_name , Sem , S_Name , S_ID ,  P_ID2  , P_name2})
                                    //res.end();

                                    
                                    connection.query('SELECT * from Exam', function (error, results, fields) {
                                      if (error) throw error;
                                      var length=results.length
                                      var flag=0;
                                      for(i=0;i<length;i++)
                                      {
                                         
                                          console.log('\nThe solution is: ', results[i].exam_ID , results[i].exam_time , results[i].exam_date , results[i].student_ID1);
                                          if(S_ID==results[i].student_ID1)
                                          {
                                            //var pname=req.body.program_ID
                                            var ExI=results[i].exam_ID
                                            var ExT=results[i].exam_time
                                            var ExD=results[i].exam_date
                                           //res.send({SubI , SubN , F_ID2 ,  F_name , Sem , S_Name , S_ID ,  P_ID2  , P_name2 , ExI , ExT , ExD})
                                          //res.end();


                                          connection.query('SELECT * from ExamScheduled', function (error, results, fields) {
                                            if (error) throw error;
                                            var length=results.length
                                            var flag=0;
                                            for(i=0;i<length;i++)
                                            {
                                               
                                                console.log('\nThe solution is: ', results[i].seat_no);
                                                if(S_ID==results[i].student_ID2)
                                                {
                                                  //var pname=req.body.program_ID
                                                  var Sno=results[i].seat_no;
                                                  var Rno=results[i].room_ID1;
                                                // res.send({SubI , SubN , F_ID2 ,  F_name , Sem , S_Name , S_ID ,  P_ID2  , P_name2 , ExI , ExT , ExD , Sno , Rno})
                                                 //res.end();


                                                 connection.query('SELECT * from Room', function (error, results, fields) {
                                                  if (error) throw error;
                                                  var length=results.length
                                                  var flag=0;
                                                  for(i=0;i<length;i++)
                                                  {
                                                     
                                                      console.log('\nThe solution is: ', results[i].seat_no);
                                                      if(Rno==results[i].room_ID)
                                                      {
                                                        //var pname=req.body.program_ID
                                                        //var Sno=results[i].seat_no;
                                                        //var Rno=results[i].room_ID1;
                                                        var Sec=results[i].sec;
                                                        var RD=results[i].room_deatils;
                                                       res.send({SubI , SubN , F_ID2 ,  F_name , Sem , S_Name , S_ID ,  P_ID2  , P_name2 , ExI , ExT , ExD , Sno , Rno , Sec , RD})
                                                       res.end();
                           
                                                        
                                           
                                           
                                                      }
                                                               }
                                                    
                                              });
                     
                                                  
                                     
                                     
                                                }
                                                         }
                                              
                                        });
               
                                            
                               
                               
                                          }
                                                   }
                                        
                                  });
        
       
                                    
                       
                       
                                  }
                                           }
                                
                          });

                             
                
                
                           }
                                    }
                         
                   });
        
        
                  }
                           }
                 
          });


          }
                   }
         
  });



  }

  if(p==2)
  {
    var name=req.body.name
    console.log("Faculty Portal");
    connection.query('SELECT * from Faculty', function (error, results, fields) {
      if (error) throw error;
      var length=results.length
      var flag=0;
      for(i=0;i<length;i++)
      {
         
          console.log('\nThe solution is: ', results[i].faculty_ID , results[i].faculty_name);
          if(name==results[i].faculty_ID)
          {
            
            var fid=results[i].faculty_ID;
            var fn=results[i].faculty_name;
           //res.send({fid , fn});
           //res.end();

           connection.query('SELECT * from Subject', function (error, results, fields) {
            if (error) throw error;
            var length=results.length
            var flag=0;
            for(i=0;i<length;i++)
            {
               
                console.log('\nThe solution is: ', results[i].subject_ID , results[i].subject_name , results[i].faculty_ID2);
                if(fid==results[i].faculty_ID2)
                {
                  
                  var subi=results[i].subject_ID;
                  var subn=results[i].subject_name;
                 //res.send({fid , fn , subi , subn});
                 //res.end();


                 connection.query('SELECT * from Exam', function (error, results, fields) {
                  if (error) throw error;
                  var length=results.length
                  var flag=0;
                  for(i=0;i<length;i++)
                  {
                     
                      console.log('\nThe solution is: ', results[i].exam_ID , results[i].exam_time , results[i].exam_date , results[i].student_ID1 , results[i].faculty_ID3);
                      if(fid==results[i].faculty_ID3)
                      {
                        
                        var exi=results[i].exam_ID;
                        var ext=results[i].exam_time;
                        var exd=results[i].exam_date;
                       //res.send({fid , fn , subi , subn , exi , ext , exd});
                       //res.end();

                       connection.query('SELECT * from ExamScheduled', function (error, results, fields) {
                        if (error) throw error;
                        var length=results.length
                        var flag=0;
                        for(i=0;i<length;i++)
                        {
                           
                            console.log('\nThe solution is: ', results[i].seat_no,  results[i].room_ID1);
                            if(subi==results[i].subject_ID1)
                            {
                              console.log("Fetched roi");
                              
                              var roi=results[i].room_ID1;
                            // res.send({fid , fn , subi , subn , exi , ext , exd , roi});
                            // res.end();

                            connection.query('SELECT * from Room', function (error, results, fields) {
                              if (error) throw error;
                              var length=results.length
                              var flag=0;
                              for(i=0;i<length;i++)
                              {
                                console.log("Into Room code");
                                 
                                  console.log('\nThe solution is: ', results[i].room_ID , results[i].room_deatils);
                                  if(roi==results[i].room_ID)
                                  {
                                    console.log("Faculty Portal roi1");
                                    
                                    var roi1=results[i].room_ID;
                                    var rd=results[i].room_deatils;

                                   res.send({fid , fn , subi , subn , exi , ext , exd , roi , roi1 , rd});
                                   res.end();
                        
                                    
                        
                        
                                  }
                                           }
                                
                          });
                  
                              
                  
                  
                            }
                                     }
                          
                    });
            
                        
            
            
                      }
                               }
                    
              });
      
                  
      
      
                }
                         }
              
        });
      

            


          }
                   }
        
  });




  }

 


 
  });
 


app.listen(8080);

