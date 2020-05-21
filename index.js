'use strict';
const http = require('http');
const fs = require('fs');

const PAGES = {
    '/about':       'about.html',
    '/contact-me':  'contact-me.html',
    '/':            'index.html'
};

http.createServer((req, res) => {
  let page = PAGES[req.url];
  if (page === undefined) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
  else {
    fs.readFile(page, function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
}).listen(8080);