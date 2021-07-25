import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppError from './errors/AppError';

import './database';

const app = express();
app.use(express.json());
// app.use(routes);



app.listen(3333);
