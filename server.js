var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    while(true) { res.end('Herro'); }
    
}).listen(process.env.PORT || 8080);

