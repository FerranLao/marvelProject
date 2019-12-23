require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const cors = require("cors")
const app = express();

const whitelist = [
  "http://localhost:3001"
];
const corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const marvelApi = require("./routes/marvelApi")
app.use('/marvel', marvelApi);
const index = require('./routes/index');
app.use('/', index);



module.exports = app;
