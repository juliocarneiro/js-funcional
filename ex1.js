function adder(x){
    return function(y){
        return x + y;
    };
}
console.log(adder(3)(2));

/////////////////////////////////////////////////////////

function showOtherFunction(func){
    return func();
}
function returnedFunction(){
    return 'Returned Function';
}
console.log(showOtherFunction(returnedFunction));

/////////////////////////////////////////////////////////

let sum = function calculateSum(x, y) {
    return x + y;
};

let value1 = 10;
let value2 = 20;

console.log('a soma de ' + value1 + ' e ' + value2 + ' é igual a ' + sum(value1, value2) + '.')
console.log('o nome da função que faz a soma é ' + sum.name + '.');

/////////////////////////////////////////////////////////

function showName(){
    return 'Julio Carneiro';
}
let varShowName = showName;
console.log('a função ' + varShowName.name + ' retorna ' + varShowName() + '.');

/////////////////////////////////////////////////////////

