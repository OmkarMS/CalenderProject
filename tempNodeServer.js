var http = require('http');
var fs = require('fs');

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

    switch (request.url) {
        case '/Navbar.html':
            getResponse(response, 'text/html', './Navbar.html')
            break;
        case '/NavbarStyle.css':
            getResponse(response, 'text/css', './NavbarStyle.css')
            break;
        case '/CalenderLogo.jpeg':
            getResponse(response, 'image/jpg', './CalenderLogo.jpeg')
            break;
        default:
            getResponse(response, 'text/html', './Navbar.html')
    }
}).listen(8080);