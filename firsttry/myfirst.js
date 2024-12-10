var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`the time is currently: ${dt.myDateTime()}\n`);
    res.end('Hello World!');
}).listen(8080);
