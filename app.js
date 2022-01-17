const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");


const usersRouter = require('./components/home/index');
const userDetailRouter = require('./components/userDetail/index');
const indexRouter = require('./components/auth/authRouter');
const CustomerListRouter = require('./components/CustomerList/index');
const CustomerDetailRouter = require('./components/CustomerDetail/index');
const ProductListRouter = require('./components/ProductList/index');
const productDetailRouter = require('./components/productDetail/index');
const loginRouter = require('./components/auth/authRouter');


const app = express();  
const passport = require('./auth/passport');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  res.locals.user = req.user
  next();
});

app.use('/login', loginRouter);
app.use('/CustomerList', CustomerListRouter);
app.use('/userDetail', userDetailRouter);
app.use('/ProductList', ProductListRouter);
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/productDetail', productDetailRouter);
app.use('/CustomerDetail', CustomerDetailRouter);


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
