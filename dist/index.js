"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
class User {
    constructor(id, name, age, cart) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.cart = cart;
    }
    cartTotal() {
        let cartTotal = 0;
        for (let itm of this.cart) {
            cartTotal += itm.price;
        }
        return cartTotal;
    }
    printCart() {
        for (let itm of this.cart) {
            console.log(itm);
        }
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        let i = 0;
        for (let itm of this.cart) {
            if (itm == item) {
                this.cart.splice(i, 1);
            }
            i++;
        }
    }
    removeQuantityFromCart(item, quantity) {
        let i = 0;
        let j = 0;
        for (let itm of this.cart) {
            if (itm == item && j < quantity) {
                this.cart.splice(i, 1);
                j++;
            }
            i++;
        }
    }
}
function createUser(name, age) {
    let userUuid = (0, uuid_1.v4)();
    let newUser = new User(userUuid, name, age, []);
    return newUser;
}
function createItem(name, price, description) {
    let itemUuid = (0, uuid_1.v4)();
    let newItem = new Item(itemUuid, name, price, description);
    return newItem;
}


// testing
let jamie = createUser('Jamie', '19');

let banana = createItem('banana', 3, 'a banana');
let apple = createItem('apple', 3, 'an apple');
let orange = createItem('orange', 3, 'an orange');

jamie.addToCart(banana);
jamie.printCart();
console.log(jamie.cartTotal());

jamie.addToCart(apple);
jamie.addToCart(apple);
jamie.addToCart(apple);
jamie.printCart();
console.log(jamie.cartTotal());

jamie.addToCart(orange);
jamie.addToCart(orange);
jamie.addToCart(orange);
jamie.printCart();
console.log(jamie.cartTotal());

jamie.removeFromCart(apple);
jamie.printCart();
console.log(jamie.cartTotal());

jamie.removeQuantityFromCart(orange, 2);
jamie.printCart();
console.log(jamie.cartTotal());