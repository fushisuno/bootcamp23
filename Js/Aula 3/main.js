var po = 10;
var pu = 1;

if(po < 10){
    console.log("Mico");
}else if(po > 10 && po < 20){
    console.log("pau no ciua");
}else{
    console.log("erro");
}

let pop;

switch (pop){
    case pop = po > pu:
        console.log("1dsda");
        break;
    case pop = po == 10:
        console.log("2de");
        break;
    case po - 10 == 0:
        console.log("3w");
        break;
}

let mo = [1, "dsa", 9 , "mosa", "op"]

for (let i in mo){
    console.log(i);
}

for (i of mo){
    console.log(i);
}

function sus(i){
    while(i<5){
        console.log(i);
        i++;
    }
}
console.log("sus");
sus(0);

let p = 2
console.log(`Var p = ${(3.14159 * (p ** 2)).toFixed(4)}`);


var lines = [6.7 , 8.5, 7, ""]
var pes = [2, 3, 5];
lines.length
let med = 0;
for (let i in lines){
    med += +lines[i] * +pes[i] ;
}

console.log(`MEDIA = ${(med/10).toFixed(1)}`);

// Decodificação de vetor [] /array [] /objetos {}
var [valor] = lines;
console.log(valor)

console.log(23**3)

let poqwe = ["12 15 16 9"]
let  [okind] = poqwe[0].split(" ");

for(u of okind){
    console.log(u)
}