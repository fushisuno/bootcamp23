// Modulos externos
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const postgres = require('postgres')
const uuid = require('uuid')
const path = require('path')

// My modulos
const routes = require('./routes/router')
const Bd = require('./database/bd')

// Inicializando app
const app = express();


// Configurando App
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
require('dotenv').config()
Bd.connect()

// Configurando Template Engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');


// Configurando Rotas
app.use(routes);


// Configurando porta
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
});