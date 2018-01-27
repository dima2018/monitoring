var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");
app.listen(8080);

masStr = '';  // строка полученная от клиента для передачи браузеру

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.post('/client', function(req, res) {	
	req.on('data', function(data) {		
		masStr = data;		
	});
	req.on('end', function() {		
		res.end();
	});
});

app.get('/vote', function(req, res){		
		res.write(masStr);
		res.end();
});


app.get('/hello', function(req, res) {
	res.sendfile('hello.html');
});
app.get('/goodBy', function(req, res) {
	res.sendfile('goodBy.html');
});

app.post('/arhiv', function(req, res) {
	req.on('data', function(data) {
		
		var dat = new Date();
		var strDay = String(dat.getDate());
		var strManth = String(dat.getMonth() + 1);
		var strYear = String(dat.getFullYear() - 2000);
		var DataToday = strDay + strManth + strYear;
		var writeableStream = fs.createWriteStream(DataToday + ".txt");

		var fff = data.toString() + ".txt";
		var readableStream = fs.createReadStream(fff, "utf8");

		writeableStream.write("Привет мир!");
		writeableStream.write("Продолжение записи \n");
		writeableStream.end("Завершение записи");

		readableStream.on("data", function(chunk) {
			res.write(chunk);
			res.end();
		});
	});
});




