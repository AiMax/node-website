const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('index.html',{title: 'First Website'}); // We give title to the view index
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact Webpage'});
});

module.exports = router;
