/* 8.
* С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/

console.log(power(3, 3))
function power(val, pow) {
    if (typeof power.start == 'undefined') power.start = val
    if (pow > 1) {
        return power(val * power.start, pow - 1)
    } else {
        return val
    }
}
