const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contact-success', (req, res, next) => {
    //console.log('In another Middleware');
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;