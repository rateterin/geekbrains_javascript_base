/* 3.
Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
*/

let a = Math.floor(Math.random() * 200 - 100), b = Math.floor(Math.random() * 200 - 100);
console.log(`a=${a}\nb=${b}`)
if (a >= 0 && b >= 0) {
    console.log(`Разность: ${a - b}`)
} else if (a < 0 && b < 0) {
    console.log(`Произведение: ${a * b}`)
} else {
    console.log(`Сумма: ${a + b}`)
}