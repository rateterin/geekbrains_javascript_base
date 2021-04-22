/* 3.
Товары в корзине хранятся в массиве. Задачи:
    а) Организовать такой массив для хранения товаров в корзине;
    б) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/


let total, cart = [
    {'id': 1, 'count': 30, 'price': 50},
    {'id': 2, 'count': 3, 'price': 130},
    {'id': 3, 'count': 18, 'price': 7},
    {'id': 4, 'count': 21, 'price': 674},
]
console.log(`total: ${countBusketPrice(cart)}`)

function countBusketPrice(cart) {
return cart.reduce(function(sum, cur) {
    return sum + cur.count * cur.price
}, 0)
}