var http = require('http');

http.createServer( function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('hello javascript \n');

}).listen(3000, 'hydrogen');

console.log('server listening on 0.0.0.0 at 3000');

