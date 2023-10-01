"use strict";
// Usando o CommonJs para importar, é necessario usar o require('./')
/* const Matematica = require('./Matematica');

let x: number = 20;
let y: number = 15;


console.log(`Soma: ${Matematica.add(x, y)}`);
console.log(`Subtração: ${Matematica.sub(x, y)}`);
console.log(`Divisão: ${Matematica.div(x, y).toFixed(2)}`);
console.log(`Multiplicação: ${Matematica.mul(x, y)}`);
*/
//Importando apenas uma coisa
//import { add } from './Matematica';
// Importando Tudo
//import * as Matematica from './Matematica';
//import {add, sub, div, mul} from './Matematica';
// Importando um objeto
/*
import Matematica  from './Matematica';


let x: number = 20;
let y: number = 15;


console.log(`Soma: ${Matematica.add(x, y)}`);
console.log(`Subtração: ${Matematica.sub(x, y)}`);
console.log(`Divisão: ${Matematica.div(x, y).toFixed(2)}`);
console.log(`Multiplicação: ${Matematica.mul(x, y)}`);
*/
// Usando funções ou bibliotecas de 3°
const validator = require('validator');
//import validator from 'validator';
let ip = '127.300.0.1';
let email = 'souza.silvalook.com';
console.log(`O email ${email} ${validator.isEmail(email) === true ? 'é' : 'não é'} válido`);
console.log(`O IP ${ip} ${validator.isIP(ip) == true ? 'é' : 'não é '} válido`);
