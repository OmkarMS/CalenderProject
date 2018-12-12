var http = require('http');
var fs = require('fs');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Calender_db"
});

http.createServer(function (request, response) {
    switch (request.url) {
        case '/main.js': response.writeHead(200, { 'Content-type': 'text/javascript' });
            fs.readFile('./main.js', (err, html) => {
                if (err) {
                    throw err;
                }
                response.write(html);
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
        default: response.writeHead(200, { 'Content-type': 'text/html' });
            fs.readFile('./newHtml.html', (err, html) => {
                if (err) {
                    throw err;
                }
                response.write(html);
                response.end();
            });
    }
}).listen(8080);