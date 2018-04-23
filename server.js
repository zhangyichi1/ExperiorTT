const express = require('express');
const path = require('path');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./app_server/model/user');

const routes = require('./app_server/routes/index');

const server = express();

server.set('views', path.join(__dirname, 'app_server/views'));
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
// server.set('view engine', 'jade');

server.use(favicon(__dirname + '/public/assets/img/experior-icon-rectangle.jpg'));
server.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017/experiortt', (err) => {
  if(err) {
    console.log('not connected to db', err);
  }else {
    console.log('successfully connected to db');
  }
});
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));
server.use('/', routes);

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/client/index.html'));
});

// server.use((req, res, err) => {
//   let err = new Error('Not found');
//   err.status = 404;
//   next(err);
// });
//
// if(server.get('env') === 'development') {
//   server.use((err, req, res, next) => {
//     console.log('hahaha');
//     res.status(err.status || 500);
//     res.sendFile(path.join(__dirname + '/public/client/error.html'));
//   });
// }
//
// server.use((err, req, res, next) => {
//   console.log('1111');
//   res.status(err.status || 500);
//   res.render(path.join(__dirname + '/public/client/error.html'));
// });

module.exports = server;
