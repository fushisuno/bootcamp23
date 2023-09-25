"use strict";
/*
type heroi = {
    name: string;
    vulgo: string;
};

function printaObj(pessoa: heroi){
    console.log(pessoa);
}

printaObj({name: "Bruce Yane", vulgo: "batman"});
console.log("Hola mundo");
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
// Variaveis primitivas
let ligado:boolean = true;
let nome:string = "Marco";
let idade:number = 30;
let altura:number = 1.84;

// null
// undefined
let nulo:null = null;
let indefinido:undefined = undefined;


// Tipos abrangestes, que aceitam qualquer valor: any, void
let qualquer:any = 'Souza';
let upf:void = void{};
*/
// Objetos - sem previsibilidade
let prod = {
    name: "Souza",
    idade: 20,
    altura: 1.85,
    cidade: "Pr",
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.90,
    unidades: 5,
};
// Array's
let vet = ["1", "2", "2"];
let array2 = ["Souza", "Silva", "Ana"];
let nums = [1, 2, 4, 6, 7, 8];
let nums2 = [2, 2, 2, 2, 2];
let infos = ["Kinã", 19, "Ana", 18];
// Tuplas
let boleto = ["agua", 2.89, 10];
let dados = ["Susi", "Marcis", "Any"];
dados.pop();
// date
let aniversario = new Date("2023/09/25 09:23");
console.log(aniversario.toString());
// Função
function testeAdd(x, y) {
    return x + y;
}
function testeHello(x) {
    return `Hello ${x}`;
}
let soma = testeAdd(6, 9);
console.log("Soma: " + soma);
console.log(testeHello("Nunsy"));
// Função Multi Type
function multiFun(phone) {
    return phone;
}
console.log(multiFun("9922-2819"));
console.log(multiFun(99775544));
// Função Async - Assincrona
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Felipe";
    });
}
console.log(getDataBase(1));
;
const bot = {
    id: "1",
    name: "Anuos",
};
const bot2 = {
    id: 1,
    name: "Anuos",
    sayHellou: function () {
        throw new Error("Function not implemented.");
    }
};
console.log((bot.id = 1));
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHellou() {
        return "hellou";
    }
}
const p = new Pessoa(9, "João");
console.log(p.sayHellou());
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 98);
console.log(p1.attack());
