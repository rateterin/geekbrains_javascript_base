/* 2.
Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

function writeToLog(txt) {
    const log_content = document.querySelector('#log_content');
    tmp = log_content.appendChild(document.createElement('p'));
    tmp.textContent = txt;
}

function fillCart(){
    products.forEach(function(el, i) {
        writeToLog(`Добавляем в корзину ${el.name}, цвет ${el.color}, цена ${el.price}, количество ${i + 1}`);
        cart.add(i, i + 1);
        cart.draw();
});

}

const products = [
    {name: 'Table', color: 'black', price: 100},
    {name: 'Table', color: 'white', price: 120},
    {name: 'Chear', color: 'green', price: 50},
    {name: 'Chear', color: 'red', price: 75}
]
const cart = {
    catalog: '',
    empty: true,
    items: Array(),
    add: function(id, q) {
        if (typeof this.catalog[id] === 'undefined') return 0;
        this.items.push([this.catalog[id], q])
        this.empty = false
        return this.items.lenght
    },
    drop: function() {
        this.items = Array()
        this.empty = true
    },
    total: function() {
        if (this.empty) return 0;
        return this.items.reduce(function(sum, cur) {
            return sum + cur[0].price * cur[1]
        }, 0)
    },
    draw: function() {
        const cart_div = document.querySelector('#cart');
        const cart_content = document.querySelector('#cart_content');
        if (this.empty) {
            cart_content.textContent = 'Корзина пуста!';
        } else {
            cart_content.textContent = `В корзине: ${this.items.reduce(function(acc, cur) {return acc + cur[1]}, 0)} товаров на сумму ${this.total()} рублей`;
        }
    }
}

const log_div = document.querySelector('#log');

cart.catalog = products;
if (confirm('Наполнить корзину товарами?')) {fillCart();} else {cart.draw();}
