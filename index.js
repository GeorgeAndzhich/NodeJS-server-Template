var http = require('http'); // include http module
var dt = require('./modules/date')
var url = require('url'); // include url module
var fs = require('fs'); // file module
var formidable = require('formidable') // Formidable module, working with file uploads.


http.createServer(function(req, res){
    var q = url.parse(req.url,true);
    var filename = "."+ q.pathname;
    fs.readFile(filename,function(err, data){
        if (err){ // If not found return 404
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end('404 Page Not Found');
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        return res.write(data);
        res.end();
    });
    
}).listen(8080); // listen on the given port