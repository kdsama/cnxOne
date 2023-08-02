var createError = require('http-errors');
var express = require('express');
var path = require('path');

const promMid = require('express-prometheus-middleware');



var timeRouter = require('./routes/time');
const { auth } = require('./middleware/auth');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// For auth check for all the apis 
// aleternatively we can do it selectively
// Example for that is in routes/time.js
app.use(auth)


app.use(promMid({
  
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
  requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
}))


app.use('/time', timeRouter);



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
  res.send(err)
  
});

module.exports = app;
