const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    
    if (req.url === "/") {
        res.writeHead(200, { 'Content-type':'text/html' }); 
        let html = fs.readFileSync('./index.html');
        res.end(html)
    } else if (req.url === "/api/user") {
        res.writeHead(200, { 'Content-type':'application/json' }); 

        const json = JSON.stringify({
            "name": "Francis",
            "age": 30,
            "address": {
                "streetAddress": "88 8nd Street",
                "city": "New York"
            },
            "phoneNumber": [
                {
                    "type": "home",
                    "number": "111 111-1111"
                },
                {
                    "type": "fax",
                    "number": "222 222-2222"
                }
            ]
        });
        
        res.end(json);
    } else {
        res.writeHead(404);
        res.end();
    }

});

server.listen( 8181, '127.0.0.1' );
console.log('server is running on port 8181');