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
        case '/main.js': response.writeHead(200, { 'Content-type': 'text/javascript' });
            fs.readFile('./main.js', (err, html) => {
                if (err) {
                    throw err;
                }
                response.write(html);
                //let resultSet = mysql.selectStatement('piya@gmail.com');
                //response.write(JSON.stringify(resultSet));

                response.end();

            });
            break;
        case '/new.css': response.writeHead(200, { 'Content-type': 'text/css' });
            fs.readFile('./new.css', (err, html) => {
                if (err) {
                    throw err;
                }
                response.write(html);
                response.end();
            });
            break;
        case '/event_data': request.on('data', (data) => {
            const dataObj = JSON.parse(data);
            mysql.insertStatement(dataObj);

        });
            break;
        case '/loadEvents':
            response.writeHead(200, { 'Content-type': 'application/json' });


            let resultset = mysql.selectStatement('piya@gmail.com', function (result) {
                console.log("hhhhhhhhhhhh" + result);
            });

            // response.write(resultset);
            response.end();
            break;
        default:
            getResponse(response, 'text/html', './Navbar.html')
    }
}).listen(8080);