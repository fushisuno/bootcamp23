import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors  from 'cors';

import routes from './routes/index';

dotenv.config();
const server = express();

server.use(cors);
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(routes);

server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada');
});

server.listen(process.env.PORT);
