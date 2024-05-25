import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import homeRouter from './routers/homeRouter';

const app = express();
app.use('/home/', homeRouter);


app.use(cors());

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World");
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

module.exports = app;