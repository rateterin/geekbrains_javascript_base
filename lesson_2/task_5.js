/* 5.
Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return
*/

console.log(`1 + 3 = ${sum(1, 3)}`);
console.log(`8 - 5 = ${sub(8, 5)}`);
console.log(`9 * 3 = ${mul(9, 3)}`);
console.log(`12 / 3 = ${div(12, 3)}`);

function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}
