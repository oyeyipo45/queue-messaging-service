import express, { Application } from 'express';
import 'reflect-metadata';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
