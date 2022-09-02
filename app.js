var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var statementsRouter = require('./routes/statements');
// var usersRouter = require('./routes/users');
require('dotenv').config();
require('./config/database');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/statements', statementsRouter);

module.exports = app;
