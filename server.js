var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.send('index.html');
});

server.listen(4567, function(){
  console.log("Server listening on port 4567");
});

module.exports = server;