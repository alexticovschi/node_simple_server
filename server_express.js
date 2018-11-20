const express = require('express');
const app = express();
const querystring = require('querystring');


app.get('/', (req, res) => {
    res.send(`
        <html>
            <body style="background:red">
                Hello dudes
            </body>
        </html>
    `)
});

app.get('/api/user', (req,res)=>{
    res.send({
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
    })
});

app.get('/api/:user/:id', (req,res)=>{
    let userName = req.params.user;

    let id = req.params.id;
    res.send(`
        <html>
            <body>
                The user id is ${id}, and the username is ${userName}
            </body>
        </html>
    `)
});

app.get('/api/car', (req,res)=>{
    let make = req.query.make;
    let year = req.query.year;

    res.send({ 
        make, 
        year 
    })
});

const port = process.env.PORT || 3000;

app.listen(port);