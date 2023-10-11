
/*
// Tipos primitivos
var vouf = false;
console.log(typeof(vouf));

var numbero = 1;
console.log(typeof(numbero));

var noema = "nome";
console.log(typeof(noema));

var ope;
console.log(ope);

// let - escopo local
let opaa = 0;
console.log(opaa);

// const - valor unico, impossibilidato de modificações
const pi = 3.14159;
console.log(pi);
*/

//Araray
let uo =  Array(Array(2, 3, 2), Array(1, 2,3,4,5,6,7,8,9,10), 99);
let vet = ["Banana", 28, "Kiwi", 5]

console.log(vet)
console.log(uo)
console.log(uo[1][5])

// forEach - itera um aary
uo.forEach(function(item, indice){console.log(item, indice)})

// push - adiciona no final
uo.push("Sua Mae")
uo.push("Comi cu")
console.log(uo)

// pop - remove no final
uo.pop()
console.log(uo)

// shift - remove no começo
uo.shift()
console.log(uo)

// unshift - add no inicio
uo.unshift(Array(2,2,2,2,1))
console.log(uo)

// indexOf - retorna o indice de um valor
uo.indexOf("Sua Mae")
console.log(uo.indexOf("Sua Mae"))

// splice - remove ou substitui um item pelo indice
uo.splice(0, 2)
console.log(uo)

// slice - retorna uma parte do array existente
uo.slice(0, 1)
console.log(uo.slice(0, 1))

// Objetos
let dic = {
    cor: 'preto',
    tamanho: 'G',
    art: 'Java',
    preco: 10 + "$",
    objectp: {
        name:  'novoObjeto',
    },
    obj: 'Objeto',
    arrqy: [1, "mama", 9],
};

console.log(dic);

var string = dic.preco;
console.log(string);

string = dic.objectp.name;
console.log(string);

string = dic.arrqy[1];
console.log(string);

var {cor} = dic;
console.log(cor);