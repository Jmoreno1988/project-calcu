var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;

    response.writeHead(200, { 
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*' // implementation of CORS
        });

    switch(path) {
        case '/getscore':
            response.end("pablo: 3000");
            break;
    }
}).listen(3000);
console.log('Server running...');