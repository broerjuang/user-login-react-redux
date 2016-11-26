var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = 8000;
var users = require('./routes/users');
var app = express();


// require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoList');

// mongoose global promise
mongoose.Promise = global.Promise;

// using middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// prepare the routes
app.use('/api', users);

// listen the server
app.listen(port, () => {
  console.log('server is running on port ', port)
})
