var http = require('http');
var par = require('parport');
var port = new par.Port();
var keypress = require('keypress');
keypress(process.stdin);


process.stdin.setRawMode(true);
process.stdin.resume();

http.createServer(function (req, res) {
	//deneme();
	//setInterval(function() { kit();  }, 2300);
	process.stdin.on('keypress', function (ch, key) {
		console.log('got "keypress"', key);

		if (key.name == 'up')
		if (key && key.name == 'up') {
			port.writeData(1);
		} else if (key && key.name == 'down') {
			port.writeData(2);
		} else if (key && key.name == 'right') {
			port.writeData(4);
		} else if (key && key.name == 'left') {
			port.writeData(8);
		} else if (key && key.name == 'p') {
			port.writeData(0);
		}
	});

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(3000, "127.0.0.1");


var kit = function() {
	var arr = [1,3,7,15,30,60,120,240,224,192,128,0];
	
	port.writeData(1)
	setTimeout(function() { port.writeData(arr[1]); },100);
	setTimeout(function() { port.writeData(arr[2]); },200);
	setTimeout(function() { port.writeData(arr[3]); },300);
	setTimeout(function() { port.writeData(arr[4]); },400);
	setTimeout(function() { port.writeData(arr[5]); },500);
	setTimeout(function() { port.writeData(arr[6]); },600);
	setTimeout(function() { port.writeData(arr[7]); },700);
	setTimeout(function() { port.writeData(arr[8]); },800);
	setTimeout(function() { port.writeData(arr[9]); },900);
	setTimeout(function() { port.writeData(arr[10]); },1000);
	setTimeout(function() { port.writeData(arr[11]); },1100);


	setTimeout(function() { port.writeData(arr[10]); },1200);
	setTimeout(function() { port.writeData(arr[9]); },1300);
	setTimeout(function() { port.writeData(arr[8]); },1400);
	setTimeout(function() { port.writeData(arr[7]); },1500);
	setTimeout(function() { port.writeData(arr[6]); },1600);
	setTimeout(function() { port.writeData(arr[5]); },1700);
	setTimeout(function() { port.writeData(arr[4]); },1800);
	setTimeout(function() { port.writeData(arr[3]); },1900);
	setTimeout(function() { port.writeData(arr[2]); },2000);
	setTimeout(function() { port.writeData(arr[1]); },2100);
	setTimeout(function() { port.writeData(arr[0]); },2200);
	setTimeout(function() { closeAllLights(); },2300);


}


var deneme = function() {

	var a = 1;
	var t = setInterval(function() {
		port.writeData(a);
		a++;

		if (a > 255) {
			clearInterval(t);
			deneme2();
		}
	},50)
}

var deneme2 = function() {
	setTimeout(function() { openAllLights(); },200);
	setTimeout(function() { closeAllLights(); },400);
	setTimeout(function() { openAllLights(); },600);
	setTimeout(function() { closeAllLights(); },800);
	setTimeout(function() { openAllLights(); },1000);
	setTimeout(function() { closeAllLights(); },1200);
}

var openAllLights = function() {
	port.writeData(255);
}

var closeAllLights = function() {
	port.writeData(0);
}

console.log('Start...');