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

let dados:String[] = ["Susi", "Marcis", "Any"]
dados.pop()


// date
let aniversario:Date = new Date("2023/09/25 09:23")
console.log(aniversario.toString());


// Função
function testeAdd(x: number, y:number):number{
    return  x + y;
}

function testeHello(x: string):string{
    return  `Hello ${x}`
}

let soma: number = testeAdd(6, 9);
console.log("Soma: "+ soma)
console.log(testeHello("Nunsy"))



// Função Multi Type
function multiFun(phone: number | string){
    return phone;
}

console.log(multiFun("9922-2819"))
console.log(multiFun(99775544))


// Função Async - Assincrona
async function getDataBase(id: number): Promise<string>{
    return "Felipe";
}

console.log(getDataBase(1))

// Interfaces
type robot = {
    id:number | string;
    name:string;
};

interface robot2 {
    id:number | string;
    name:string;
    sayHellou(): string;
};

const bot :robot = {
    id: "1",
    name: "Anuos",
}

const bot2 :robot2 = {
    id: 1,
    name: "Anuos",
    sayHellou: function (): string {
        throw new Error("Function not implemented.");
    }
}

console.log((bot.id = 1));

class Pessoa implements robot2{
    id: string | number;
    name: string;
    
    constructor(id:number | string, name: string){
        this.id = id;
        this.name = name;
    }
    sayHellou(): string {
        return "hellou";
    }
}

const p = new Pessoa(9, "João");
console.log(p.sayHellou())


// Data modifiers
/*
    public
    private
    protected
*/
class Character {
    protected name?: string;
    readonly stregth:  number;
    skill: number;
    
    constructor(stregth: number, skill: number){
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`);
    }
}


class Magician extends Character {
    magicPoints: number;

    constructor(stregth: number, skill: number, magicPoints: number){
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

function concatArray<T>(...items: T[]): T[] {
    return new Array().concat(...items);
}

const numArray = concatArray/*gereric*/<number[]>([1, 5], [3]);
const strArray = concatArray<string[]>(["Felipe", "Goku"], ["Vegeta", "Majin boo"])

// numArray.push("Auoi")
console.log(numArray)
console.log(strArray)

// npm install ts-node-dev -D: servidor para typescript

// Decorations
function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class Funcionario {}


/// Documentar apends: class decorations
function apiVersion(version: string){
    return (target: any) =>{
        Object.assign(target.prototype, {__version: version, __name: "kainã"})
    };
}

@apiVersion("1,10")
class Api{}

const api = new Api();

// Atributes decorator
function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`)
            }else{
                _value = _value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
      
    };
}

class Api_1{
    @minLength(3)
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const api_1 = new Api_1("esops");
console.log(api_1.name);