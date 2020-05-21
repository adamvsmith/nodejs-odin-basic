'use strict';
var http = require('http');
var fs = require('fs');

const PAGES = {
    '/about':       'about.html',
    '/contact-me':  'contact-me.html',
    '/':            'index.html'
};

function respond(page, res) {
  fs.readFile(page, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}

http.createServer(function (req, res) {
  let page = PAGES[req.url] || '404.html';
  respond(page, res);
}).listen(8080);