var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var LocalStrategy = require('passport-local').Strategy; // Using Capital for class, Strategy is class coy

var port = 3001;
var users = require('./routes/users');
var app = express();

app.use(cors())

// require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cms_apps');

// mongoose global promise
mongoose.Promise = global.Promise;

// using middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// prepare the routes
app.use('/api', users);

// listen the server
app.listen(port, () => {
  console.log('server is running on port ', port)
})
