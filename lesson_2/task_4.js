/* 4.
Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

let a = Math.floor(Math.random() * 15), b = '', c = '';
console.log(`a=${a}`);
switch (a) {
    case 1:
        b += '1 ';
    case 2:
        b += '2 ';
    case 3:
        b += '3 ';
    case 4:
        b += '4 ';
    case 5:
        b += '5 ';
    case 6:
        b += '6 ';
    case 7:
        b += '7 ';
    case 8:
        b += '8 ';
    case 9:
        b += '9 ';
    case 10:
        b += '10 ';
    case 11:
        b += '11 ';
    case 12:
        b += '12 ';
    case 13:
        b += '13 ';
    case 14:
        b += '14 ';
    case 15:
        b += 15;
}
console.log(b);
// 2 вариант
switch (a) {
    case 1:
        process.stdout.write('1 ');
    case 2:
        process.stdout.write('2 ');
    case 3:
        process.stdout.write('3 ');
    case 4:
        process.stdout.write('4 ');
    case 5:
        process.stdout.write('5 ');
    case 6:
        process.stdout.write('6 ');
    case 7:
        process.stdout.write('7 ');
    case 8:
        process.stdout.write('8 ');
    case 9:
        process.stdout.write('9 ');
    case 10:
        process.stdout.write('10 ');
    case 11:
        process.stdout.write('11 ');
    case 12:
        process.stdout.write('12 ');
    case 13:
        process.stdout.write('13 ');
    case 14:
        process.stdout.write('14 ');
    case 15:
        process.stdout.write('15\n');
}
