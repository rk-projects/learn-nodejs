var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request' , function(err, res) { 
	res.writeHead(200, {'Content-Type':'image/png'});
	fs.createReadStream('./image.png').pipe (res);

});

server.listen(3000, 'hydrogen');
console.log('streaming image sever on 0.0.0.0 on port 3000');

