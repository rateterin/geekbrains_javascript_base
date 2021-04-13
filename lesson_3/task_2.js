/* 2/
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
*/


let total, cart = [
    {'id': 1, 'count': 30, 'price': 50},
    {'id': 2, 'count': 3, 'price': 130},
    {'id': 3, 'count': 18, 'price': 7},
    {'id': 4, 'count': 21, 'price': 674},
]
total = cart.reduce(function(sum, cur) {
    return sum + cur.count * cur.price
}, 0)
console.log(`total: ${total}`)
