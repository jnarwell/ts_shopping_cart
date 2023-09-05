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
                this.cart.splice(i);
            }
            i++;
        }
    }
    removeQuantityFromCart(item, quantity) {
        let i = 0;
        let j = 0;
        for (let itm of this.cart) {
            if (itm == item && j < quantity) {
                this.cart.splice(i);
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
