// Usando o CommonJs
/*
module.exports.add = function add(x: number, y: number): number{
    return x + y;
} 

module.exports.sub = function sub(x: number, y: number): number{
    return x - y;
} 

module.exports.div = function div(x: number, y: number): number{
    return x / y;
} 

module.exports.mul = function mul(x: number, y: number): number{
    return x * y;
} 
*/

// Usando o ECMAScript
/*
export function add(x: number, y: number): number{
    return x + y;
} 

export function sub(x: number, y: number): number{
    return x - y;
} 

export function div(x: number, y: number): number{
    return x / y;
} 

export function mul(x: number, y: number): number{
    return x * y;
} 
*/


// Usando apenas uma exportação
function add(x: number, y: number): number{
    return x + y;
} 

function sub(x: number, y: number): number{
    return x - y;
} 

function div(x: number, y: number): number{
    return x / y;
} 

function mul(x: number, y: number): number{
    return x * y;
} 

export default {
    add,
    sub,
    mul,
    div
};