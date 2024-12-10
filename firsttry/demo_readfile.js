var http = require('http');
var fs = require('fs');
// http.createServer(function (req, res) {
//     fs.readFile('demofile1.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

http.createServer(function(request, response) {
    fs.readFile('./demofile.html', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(data);
        return response.end();
    });
}).listen(8080);