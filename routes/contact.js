const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contact-us', (req, res, next) => {
    //console.log('In another Middleware');
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.post('/contact-us', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success/contact-success');
});

module.exports = router;