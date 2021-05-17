/* 1.
Продолжаем реализовывать модуль корзины:
Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
*/

const catalog = [];
const products = [
    {name: 'Table', color: 'black', price: 100},
    {name: 'Table', color: 'white', price: 120},
    {name: 'Chear', color: 'green', price: 50},
    {name: 'Chear', color: 'red', price: 75}
];

function fillCart(){
    products.forEach(function(el, i) {
        writeToLog(`Добавляем в корзину ${el.name}, цвет ${el.color}, цена ${el.price}, количество ${i + 1}`);
        cart.add(i, i + 1);
        cart.draw();
});

}

function by(id) {
    cart.add(id, 1);
    cart.draw();
}

function drawCatalog() {
    cat = document.querySelector('#catalog');
    cat_content = cat.querySelector('#catalog_content');
    products.forEach(function(el, i) {
        line = cat_content.appendChild(document.createElement('div'));
        line.className = 'cat_line_wrap';
        line.innerHTML = `${el.name}, цвет ${el.color}, цена ${el.price} <button class='byBtn'>Купить</button>`;
        byBtn = line.querySelector('.byBtn');
        byBtn.addEventListener('click', () => by(i));
    });
}

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
drawCatalog();
