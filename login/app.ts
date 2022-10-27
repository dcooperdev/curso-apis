import dotenv from 'dotenv';
import express, { Express, Request, Response, NextFunction  } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose, { ConnectOptions } from 'mongoose';
import { credentialsRouter } from './src/routes/index';

dotenv.config();

mongoose.connect('mongodb://localhost:27017/logindb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions, () => console.log('Connected to database')
);

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', credentialsRouter);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
	console.log("error", error);
	res.status(500).send(error.message);
});

module.exports = app;
