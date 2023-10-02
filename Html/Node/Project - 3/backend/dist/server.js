require('dotenv').config();
const express  = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./routes/routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({extended: true}));

server.use(router);

server.use((req, res) => {
  res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT, () =>{
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
});
