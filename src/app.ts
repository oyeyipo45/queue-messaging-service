import express, { Application } from 'express';
import 'reflect-metadata';
import routes from './routes/routes'

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", routes)

export default app;
