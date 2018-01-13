// client server request
var unirest = require('unirest');

/**
 * some code

var i = 0;
function client(){
 i++;
 if(i==6)i=1;
if(i==1){unirest.post('http://localhost:8080/client').header('Accept', 'plain/text').send("20").end(function (response){console.log(response.body);});}
if(i==2){unirest.post('http://localhost:8080/client').header('Accept', 'plain/text').send("-10").end(function (response){console.log(response.body);});}
if(i==3){unirest.post('http://localhost:8080/client').header('Accept', 'plain/text').send("25").end(function (response){console.log(response.body);});}
if(i==4){unirest.post('http://localhost:8080/client').header('Accept', 'plain/text').send("-15").end(function (response){console.log(response.body);});}
if(i==5){unirest.post('http://localhost:8080/client').header('Accept', 'plain/text').send("22").end(function (response){console.log(response.body);});}
}
setInterval(client, 2000);

*/


var cycle = 0;
var masNamber = [];

var timerId = setInterval(function() {
	getRend(30, -20);
	cycle++;
}, 1000);

function getRend(max, min) {
	var namber = (Math.floor(Math.random() * (max - min + 1)) + min);
	unirest.post('http://localhost:8080/client').header('Accept', 'plain/text').send(String(namber)).end(function(response) { console.log(response.body); });
	masNamber[cycle] = namber;
}

setTimeout(function() {
	clearInterval(timerId);
}, 40000);