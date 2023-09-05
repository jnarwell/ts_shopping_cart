import { v4 as uuidv4 } from "uuid";

class Item{
    id:string;
    name:string;
    price:number;
    description:string;

    constructor(id:string, name:string, price:number, description:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class User{
    id:string;
    name:string;
    age:number; 
    cart:Item[];

    constructor(id:string, name:string, age:number, cart:Item[]){
        this.id = id;
        this.name = name;
        this.age = age;
        this.cart = cart;
    }

    cartTotal():number{
        let cartTotal:number = 0;
        for (let itm of this.cart){
            cartTotal += itm.price;
        }
        return cartTotal;
    }

    printCart():void{
        for (let itm of this.cart){
            console.log(itm);
        }
    }

    addToCart(item:Item){
        this.cart.push(item);
    }

    removeFromCart(item:Item){
        let i = 0;
        for (let itm of this.cart){
            if (itm == item){
                this.cart.splice(i);
            }
            i++;
        }
    }
    
    removeQuantityFromCart(item:Item, quantity:number){
        let i = 0;
        let j = 0;
        for (let itm of this.cart){
            if (itm == item && j < quantity){
                this.cart.splice(i);
                j++;
            }
            i++;
        }
    }
}

function createUser(name:string, age:number):User{
    let userUuid = uuidv4();
    let newUser = new User(userUuid, name, age, [])
    return newUser;
}

function createItem(name:string, price:number, description:string):Item{
    let itemUuid = uuidv4();
    let newItem = new Item(itemUuid, name, price, description);
    return newItem;
}