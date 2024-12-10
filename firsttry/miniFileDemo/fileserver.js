// var http = require('http');
// var url = require('url');
// var fs = require('fs');
var http = require('http');
var fs = require('fs');
var url = require('url');

//
// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data) {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

http.createServer(function(request, response) {
    var q = url.parse(request.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, "utf8", function(err, data) {
        if (err){
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end();
        }
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });
}).listen(8080);