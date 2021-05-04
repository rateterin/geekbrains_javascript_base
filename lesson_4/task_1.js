/* 1.
Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/


function num_2_obj(num) {
    if (Number.isInteger(num)) {
        if (num < 0 || num > 999) {
            console.log('Функция принимает один аргумент - целое число от 0 до 999');
            return;
        }
        let obj
        obj = {'единицы': num % 10, 'десятки': Math.floor((num % 100) / 10), 'сотни': Math.floor(num / 100)};
        return obj;
    }
}

function num_2_obj_2(num) {
    if (Number.isInteger(num)) {
        if (num < 0 || num > 999) {
            console.log('Функция принимает один аргумент - целое число от 0 до 999');
            return;
        }
        let obj;
        num = String(num);
        let l = num.length;
        obj = {'единицы': Number(num[l - 1]), 'десятки': l >= 2 ? Number(num[l - 2]) : 0, 'сотни': l >= 3 ? Number(num[l - 3]) : 0};
        return obj;
    }
}

console.log(num_2_obj(23));
console.log(num_2_obj_2(23));
