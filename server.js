const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type"text" name="message"><button>Enter</button></form></body>');
        res.write('</html>');
        return res.end();
    }


    // Wrting to the file and redirect it with 302
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        
    }

    else if(url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>');
        return res.end();
    } else if(url === '/home') {
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><h1>Welcome to About Us Page</h1></body>');
        res.write('</html>');
        return res.end();
    } else if(url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node</title></head>');
        res.write('<body><h1>Welcome to my Node JS Project</h1></body>');
        res.write('</html>');
        return res.end();
    }

    else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to my Node JS Project</h1></body>');
    res.write('</html>');
    res.end();
    }
})

server.listen(4000, () => {
    console.log("Server is running on port number 4000");
});