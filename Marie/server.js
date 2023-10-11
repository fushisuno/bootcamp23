// Importanto bibliotecas
const express = require('express');
const path = require('path');
const cors = require('cors');
const handlebars = require('express-handlebars');
require('dotenv').config();

// Imporanto meus módulos
const app = require('./src/routes/router');

const server = express();

// Configurando servidor
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));
server.use(express.urlencoded({extended: true}));

// Configurando template engine
server.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');
server.set("views", path.join(__dirname, './src/views'));


// Router
server.use(app);

// Página 404
server.use((req, res) => {
  res.status(404).send('Página não encontrada!');
});



// Configurando PORT
server.listen(process.env.PORT, ()=>{
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});