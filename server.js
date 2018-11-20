const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-type':'text/plain' });
    res.end('Hello dude, I am a response')
});

server.listen( 8181, '127.0.0.1' );
console.log('server is running on port 8181');