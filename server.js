var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.engine('.html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/test',  express.static(__dirname + '/test'));
app.use('/lib',  express.static(__dirname + '/lib'));

app.get('/', function(request, response){
  response.render('index.html');
});

server.listen(4567, function(){
  console.log("Server listening on port 4567");
});

module.exports = server;