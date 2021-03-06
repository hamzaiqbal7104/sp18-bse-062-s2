var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopnameRouter=require("./routes/shopname");
const { Mongoose } = require('mongoose');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/shopname",shopnameRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect("mongodb+srv://hamzaiqbal7104:hamza7104@cluster0.y7qnr.mongodb.net/<dbname>?retryWrites=true&w=majority",{ useNewUrlParser: true ,useUnifiedTopology: true }).then(()=>console.log("connected to Mongo..")).catch((err)=>console.log(err));

module.exports = app;
