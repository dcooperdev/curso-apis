require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/logindb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const indexRouter = require('./src/routes/index');
try {
} catch (error) {
  console.log({ error })
}

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);

app.use((error, req, res, next) => {
	console.log("error", error);
	res.status(500).send(error.message);
});

module.exports = app;
