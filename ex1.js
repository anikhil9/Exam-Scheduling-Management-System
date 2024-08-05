var http=require('http');
var url=require('url');
var fs=require('fs');

//var dt =require("./myDateTime")
//var dt=require("./myDateTime")
http.createServer(function(req,res)
{

    /*fs.readFile('test.txt',function(err,data){
        res.writeHead(200,{'Context-Type':'text/html'});
        if(data.includes('hello')){res.write('CONGRATULATIONS');}
       // res.write(data);
        res.end();
    });*/

    /*fs.appendFile('sample.txt','Hello CSE Node Js!',function(err)
    {
        if(err) throw err;
        res.write("SAVED");
        res.end();
    })*/
    
    
    
    /*fs.readFile('test.txt',function(err,data){
        res.writeHead(200,{'Context-Type':'text/html'});
        res.write(data);
        res.end();
    });*/
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write('Heloo World'+req.url);
    //res.end('Hello World! '+'<br></br>'+dt.myDateTime());
    var q=url.parse(req.url,true).query;
    //var q1=req.url
    // res.write(q1+"\n");
    //var txt=q.host+"/t"+q.pathname+"\t"+q.search;
    //res.write('\nText Query\t'+txt);
    var txt ="Name : "+q.Name+"\n"+"Department: "+ q.Department+"\n"+q.id+"Age : "+q.Age+"\t"+"PT: "+ q.Department+"\n";
    res.write('.\nText Query \t'+txt);
    fs.appendFile('sample.txt',txt,function(err)
    {
        if(err) throw err;
        res.write("SAVED");
        res.end();
    })
    /*if(q.username==='qwerty'&&q.password==='qwerty')
    {
        res.write('\nSuccesful');
    }
    else
    {
        res.write('\nFailure');
    }*/
    res.end();
    
}).listen(8080);
//console.log('Server running at http:/');