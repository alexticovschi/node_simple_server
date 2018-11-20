const http = require('http');
const fs = require('fs');

let html = fs.readFileSync('./index.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-type':'text/html' });
    res.end(html)
});

server.listen( 8181, '127.0.0.1' );
console.log('server is running on port 8181');