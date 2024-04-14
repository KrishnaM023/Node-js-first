const fs = require("fs");

const requestHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {

        fs.readFile("chat.txt", {encoding: "utf-8"}, (err, data) => {
            if(err){
                console.log(err);
            }

            console.log(`Data from File: ` + data);
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>${data}</body>`);
            res.write(`<body><form action="/message" method="POST"><input type"text" name="message"><button>Enter</button></form></body>`);
            res.write('</html>');
            return res.end();
        });
        
    }

    // Wrting to the file and redirect it with 302
    else if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('chat.txt', message, (err) => {
                console.log(`indise fs.writefile`);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });
        
    }

    else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to my Node JS Project</h1></body>');
    res.write('</html>');
    res.end();
    }
});

// Methods of Importing
// Method 1
//module.exports = requestHandler;

// Method 2
/*module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}*/

// Method 3
//module.exports.handler = requestHandler;
//module.exports.someText = 'Some hard coded text';

// Or
exports.handler = requestHandler;
exports.someText = 'Some hard coded text';