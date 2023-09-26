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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// Data modifiers
/*
    public
    private
    protected
*/
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
class Magician extends Character {
    constructor(stregth, skill, magicPoints) {
        super(stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character(10, 98);
const p2 = new Magician(10, 98, 50);
console.log(p1.attack());
console.log(p2.attack());
// Generics
//function concatArray(items: any[]): any[] {
//    return new Array().concat(...items);
//}
function concatArray(...items) {
    return new Array().concat(...items);
}
const numArray = concatArray /*gereric*/([1, 5], [3]);
const strArray = concatArray(["Felipe", "Goku"], ["Vegeta", "Majin boo"]);
// numArray.push("Auoi")
console.log(numArray);
console.log(strArray);
// npm install ts-node-dev -D: servidor para typescript
// Decorations
function ExibirNome(target) {
    console.log(target);
}
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    ExibirNome
], Funcionario);
/// Documentar apends: class decorations
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version, __name: "kainã" });
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("1,10")
], Api);
const api = new Api();
console.log(api.__version);
// Atributes decorator
class Api_1 {
    constructor(name) {
        this.name = name;
    }
}
const api_1 = new Api_1("produtos");
console.log(api_1.name);
