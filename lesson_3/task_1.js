/* 1.
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/


let x = 2;
while (x <= 100) {
    let y = Math.ceil(x / 2);
    while (y >= 1) {
        if (y == 1) console.log(x);
        if (x % y == 0) break;
        y--;
    }
    x++;
}
