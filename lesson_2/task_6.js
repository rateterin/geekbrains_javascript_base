/* 6.
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где 
    arg1, arg2 — значения аргументов, 
    operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch)
*/

res = calc('-1.4', 3, '-');
console.log(res ? res : '');
function calc(arg1, arg2, operation) {  // oper - строка из одного символа, обозначающая арифметическую операцию (+, -, * или /)
    if (operation.length != 1 || !('+-*/'.indexOf(operation) + 1)) {
        console.log('Не верная операция в третьем параметре!');
        return
    }
    if (!Number(arg1) || !Number(arg2)) {
        console.log('Два первых аргумента должны быть числами!')
        return
    }
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    switch(operation) {
        case '+':
            return `${arg1} ${operation} ${arg2} = ${arg1 + arg2}`;
        case '-':
            return `${arg1} ${operation} ${arg2} = ${arg1 - arg2}`;
        case '*':
            return `${arg1} ${operation} ${arg2} = ${arg1 * arg2}`;
        case '/':
            return `${arg1} ${operation} ${arg2} = ${arg1 / arg2}`
    }
}
