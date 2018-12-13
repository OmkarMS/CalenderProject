var http = require('http');
var fs = require('fs');
const selectStatement = require('./CalenderDB')

//var count = 2;

const getResponse = (response, contentType, fileURL) => {
    response.writeHead(200, { 'Content-type': contentType });
    fs.readFile(fileURL, (err, html) => {
        if (err) {
            throw err;
        }
        response.write(html);
        response.end();
    });
}
http.createServer(function (request, response) {
    console.log(request.url);


   selectStatement.select('irf@gmail.com');


    switch (request.url) {

        case '/login.html':
            getResponse(response, 'text/html', './login.html')
            break;
        case '/login.css':
            getResponse(response, 'text/css', './login.css')
            break;
            case '/login.js':
            getResponse(response, 'text/css', './login.js')
            break;
        case '/CalenderLogo.jpeg':
            getResponse(response, 'image/jpg', './CalenderLogo.jpeg')
            break;
        default:
            getResponse(response, 'text/html', './login.html')
    }
}).listen(8080);