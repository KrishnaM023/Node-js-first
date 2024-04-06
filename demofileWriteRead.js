const http = require('http');
const fs = require("fs");

fs.writeFile("chat.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        //const filePath = path.join(__dirname, "chat.txt");

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

    // Wrting to the file and redirect it with 302  node demofileWriteRead.js
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
})

server.listen(3000, () => {
    console.log("Server is running on port number 3000");
});







