const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Krishna');
})

server.listen(4000, () => {
    console.log("Server is running on port number 4000");
});