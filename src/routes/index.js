const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('index',{title: 'First Website'}); // We give title to the view index
});

module.exports = router;
