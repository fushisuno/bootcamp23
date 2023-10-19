// Modulos externos
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const { Server } = require("socket.io");
const session = require('express-session');
const flash = require('connect-flash');

// My modulos
const routes = require('./routes/router')
const Bd = require('./database/bd')

// Inicializando app
const app = express();

//Configurando sessão
app.use(session({
    secret: "0DWNWJkds23kl213KSA",
    resave: false,
    saveUninitialized: false
  }));
app.use(flash())

// Middleware
app.use((req, res, next)=>{
res.locals.sessionUser = req.session.sessionUser;
next()
});


// Configurando App
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../public")));
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