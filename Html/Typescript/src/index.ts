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
let prod:object = {
    name: "Souza",
    idade: 20,
    altura: 1.85,
    cidade: "Pr",
};

// Objetos tipados
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.90,
    unidades: 5,
};


// Array's
let vet: string[] = ["1", "2", "2"]
let array2:Array<string> = ["Souza", "Silva", "Ana"]

let nums: number[] = [1, 2, 4 , 6, 7, 8]
let nums2: Array<number> = [2, 2, 2, 2, 2]

let infos: (string | number)[] = ["Kinã", 19, "Ana", 18];

// Tuplas
let boleto: /*Passa o colchete direto*/ [string, number, number] = ["agua", 2.89, 10]