/* 2.
Продолжить работу с интернет-магазином:
    a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    b. Реализуйте такие объекты.
    c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/


let products = [
    {name: 'Table', color: 'black', price: 100},
    {name: 'Table', color: 'white', price: 120},
    {name: 'Chear', color: 'green', price: 50},
    {name: 'Chear', color: 'red', price: 75}
]
let cart = {
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
    } 
}
console.log('Connecting Catalog to Cart...')
cart.catalog = products
console.log('Adding some positions in Empty Cart')
cart.add(0, 3)
cart.add(3, 8)
console.log('Calculeting total...')
console.log(`Cart_total: ${cart.total()}`)
console.log('Clearing Cart...')
cart.drop()
console.log('Try calculating total for Empty Cart...')
console.log(`Cart_total: ${cart.total()}`)
