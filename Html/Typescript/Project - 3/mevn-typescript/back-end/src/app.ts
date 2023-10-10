import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routesApp from './routes/router';
import Bd from './database/bd'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

dotenv.config();
Bd.connect()

app.use('/api', routesApp);

export default app;