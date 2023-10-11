// Criando um servidor: 
// Primeiro instale o Express

import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

dotenv.config();

import mainRoutes from './routes/index';
import admRoutes from './routes/admPainel';

// Cria o servidor
const server = express();

// Configurando tmeplates engines
server.set('view engine', 'mst');
server.set('views', path.join(__dirname, './views'));
server.engine('mst', mustache());

// Rotas de arquivos estaticos
server.use(express.static(path.join(__dirname, '../public')));


server.use(mainRoutes);
server.use('/adm', admRoutes);


server.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada!");
});

// Ouvir o servidor na porta x
server.listen(process.env.PORT);