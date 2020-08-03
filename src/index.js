const express = require("express");
const { request } = require("express");
const app = express();
const path = require('path');

// Settings
app.set('port', 4000); // Variable def in server for global access
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); // We work with html files but we render them in ejs
app.set('view engine', 'ejs');

// Middlewares


// Routes
app.use(require('./routes/'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


// Listening the server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});  