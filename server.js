/*var express = require('express');
var app = express();
app.listen(8080);

app.get('/', function (req, res) {
   res.sendfile('index.html');
   console.log("Example app");
});*/

var express = require('express');  
var app = express();
var path = require('path');
var fs = require("fs");
app.listen(8080);

var i = 0;
var cauntRequest = 0;
var temp;
var tempPx;
var ddd;
var d = [];
d[0] = 0;
d[1] = 100;
 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendfile('index.html');      
});
app.get('/hello', function(req, res){
    res.sendfile('hello.html');      
});
app.get('/goodBy', function(req, res){
    res.sendfile('goodBy.html');      
});
app.get('/vote', function(req, res){
     ddd = d.join(' ');        
     res.write(ddd);
     res.end(); 
 });
 app.post('/arhiv', function(req, res){
     req.on('data', function(data){
         
         'use strict';
            class User {
         constructor(name){
             this.name = name;                 
         }
         }
         let Vasya = new User('vasya');
         console.log(Vasya.name);
 
         
var dat = new Date();
var strDay = String(dat.getDate());
var strManth = String(dat.getMonth()+1);
var strYear = String(dat.getFullYear() - 2000);
var DataToday = strDay+ strManth + strYear;
var writeableStream = fs.createWriteStream(DataToday +".txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
         
         //console.log(data.toString());         
         var fff = data.toString() + ".txt";
         var readableStream = fs.createReadStream(fff, "utf8");
         readableStream.on("data", function(chunk){ 
         res.write(chunk);
         res.end(); 
         });
         
     });
 });

app.post('/client', function(req, res){
    
    i++;  
    req.on('data', function(data){
       console.log(data.toString());       
         temp = data;
         if(temp<=0)temp = 150-(temp*5);
         else temp = temp*(-5)+ 150;
     });
     
     req.on('end', function(){		
	res.write('Данные с сервера' + i);
        res.end();   
	});
             
 	cauntRequest++;	
	
		if(cauntRequest==19){
                  cauntRequest=1; 
                  d.length = 0;
                  d[0] = 50;
                  d[1] = 150;
                }                    
                    
		if(cauntRequest==1)
		{			
		  d[2] = '100';
		  d[3] = temp;
		  
		}
		if(cauntRequest==2)
		{			
		  d[4] = '150';
		  d[5] = temp;
		}
		
		if(cauntRequest==3)
		{			
		  d[6] = '200';
		  d[7] = temp;
		}
		if(cauntRequest==4)
		{			
		  d[8] = '250';
		  d[9] = temp;
		}
		if(cauntRequest==5)
		{			
		  d[10] = '300';
		  d[11] = temp;
		}
                if(cauntRequest==5)
		{			
		  d[12] = '350';
		  d[13] = temp;
		}
                if(cauntRequest==5)
		{			
		  d[14] = '400';
		  d[15] = temp;
		}
                if(cauntRequest==5)
		{			
		  d[16] = '450';
		  d[17] = temp;
		}
                if(cauntRequest==5)
		{			
		  d[18] = '500';
		  d[19] = temp;
		}
	    
});
/*app.get('/vote', function(req, res){
     ddd = d.join(' ');        
     res.write(ddd);
     res.end();     
});*/



