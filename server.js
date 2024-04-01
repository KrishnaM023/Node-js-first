const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

     if(url === '/home') {
        //res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>');
        return res.end();
    } else if(url === '/home') {
        //res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><h1>Welcome to About Us Page</h1></body>');
        res.write('</html>');
        return res.end();
    } else if(url === '/node') {
        //res.setHeader('Content-Type', 'text/html');
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