/**
 * Module dependencies.
 */

 var express = require('express')
 , routes = require('./routes')
 , user = require('./routes/user')
 , http = require('http')
 , fs = require('fs');

 var app = express();


// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/move', function(req, res) {
    
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});