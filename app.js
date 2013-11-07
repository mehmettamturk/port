
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var par = require('parport');
var port = new par.Port();

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/move/:direction', function(req, res){
	var direction = parseInt(req.params.direction);
	port.writeData(direction);
	res.send(200);
});

app.get('/stop', function(req, res) {
	port.writeData(0);
	res.send(200);
});

app.get('/kit', function(req, res) {
	for(var i = 0; i < 5; i++) {
	  kit(i);
	}

	res.send(200);
});

var kit = function(val) {
	var arr = [1,3,7,15,30,60,120,240,224,192,128,0];

    var time = 2400 * val;
    (function firstLoop(i) {
    	time = time + 100;
    	setTimeout(function() { port.writeData(arr[i]); }, time);
    	if(++i < 12)
    		firstLoop(i); 
    	else {
            (function secondLoop(i) {
    			time = time + 100;
    	        setTimeout(function() { port.writeData(arr[i]); }, time);
    	        if(--i)
    		        secondLoop(i); 
    		    else 
    		    	setTimeout(function() { port.writeData(0); }, time + 100);
            })(11)
        }
    })(0);

}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server Start Port:' + app.get('port'));
});
