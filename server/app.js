var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var LocalStrategy = require('passport-local').Strategy; // Using Capital for class, Strategy is class coy
var session = require('express-session')

var modelUser = require('./models/user.model'); // we need user model for connecting with passport

var port = 3001;
var users = require('./routes/users');
var app = express();

app.use(cors())
// this should be called after user model is embeded
// to make user cookies on the browser
app.use(session({
  secret: 'bebas',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(modelUser.authenticate()))

// please read more about serialize and deserilize user. For short, it just putting user scheama into separate bite in server
passport.serializeUser(modelUser.serializeUser());
passport.deserializeUser(modelUser.deserializeUser());


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
