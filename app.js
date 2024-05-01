//const routes = require('./routes');
//console.log(routes.someText);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('In another Middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Product"><input type="number" name="Size" placeholder="Size of product"><button>Add Product</button></form>')
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In another Middleware');
    res.send('<h1>Hello from Express!</h1>')
});

app.listen(3000);
