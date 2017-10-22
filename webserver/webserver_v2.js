var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) { 
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello JavaScript');

});

server.listen(3000, 'hydrogen');
console.log('server running on 0.0.0.0 on port 3000');

