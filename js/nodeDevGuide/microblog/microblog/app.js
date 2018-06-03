var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');

var blogUserRouter = require("./routes/user")
var blogPostRouter = require("./routes/post");
var blogRegRouter = require("./routes/reg");
var blogLoginRouter = require("./routes/login");
var blogLogoutRouter = require("./routes/logout");
var blogMainRouter = require("./routes/main");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users/:username', usersRouter);
app.use('/hello', helloRouter);
app.get('/list', function(req, res) {
 	res.render('list', {
 		title: 'List',
 		items: [1991, 'byvoid', 'express', 'Node.js']
 	});
});
app.get('/jade-demo', function(req, res) {
 	res.render('jade-demo', {
 		title: 'jade-demo',
 		friends : 10,
 		list : ["javascript", "node", "html", "css", "java"],
 		colors : ["green", "red", "yellow", "azure", "rebeccapurple"],
 		conditions : {
 			isExist : true,
 			isBlack : false,
 			isGreen : true,
 			isYellow : false
 		}
 	});
}); 

/**
 * microblog content
 */
app.all("*",function(req,res,next){
	var fs =require("fs");
	console.log(req.params);
	next();
});

app.get("/user/:id",blogUserRouter);
app.get("/post", blogPostRouter);
app.post("/reg", blogRegRouter);
app.post("/login", blogLoginRouter);
app.post("/logout", blogLogoutRouter);
app.get("/main",blogMainRouter);

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

module.exports = app;
