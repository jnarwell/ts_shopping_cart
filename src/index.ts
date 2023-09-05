import { v4 as uuidv4 } from "uuid";

class Item{
    private _id:string;
    private _name:string;
    private _price:number;
    private _description:string;

    constructor(id:string, name:string, price:number, description:string){
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
    }

    get name(){return this._name;}
    get price(){return this._price;}
    get description(){return this._description;}
    get id(){return this._id;}

    set name(thisName:string){this._name=thisName;}
    set price(thisPrice:number){this._price=thisPrice;}
    set description(thisDesc:string){this._description=thisDesc;}
    set id(thisId:string){this._id=thisId;}
}

class User{
    private _id:string;
    private _name:string;
    private _age:number; 
    private cart:Item[];

    constructor(id:string, name:string, age:number, cart:Item[]){
        this._id = id;
        this._name = name;
        this._age = age;
        this.cart = cart;
    }

    get name(){return this._name;}
    get price(){return this._age;}
    get id(){return this._id;}

    set name(thisName:string){this._name=thisName;}
    set price(thisAge:number){this._age=thisAge;}
    set id(thisId:string){this._id=thisId;}

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
                this.cart.splice(i, 1);
            }
            i++;
        }
    }
    
    removeQuantityFromCart(item:Item, quantity:number){
        let i = 0;
        let j = 0;
        for (let itm of this.cart){
            if (itm == item && j < quantity){
                this.cart.splice(i, 1);
                j++;
            }
            i++;
        }
    }
}

class Shop{
    private _inventory:Item[] = [];
    
    constructor(){
        let banana = createItem('banana', 3, 'a banana');
        let apple = createItem('apple', 3, 'an apple');
        let orange = createItem('orange', 3, 'an orange');
        this._inventory.push(banana, apple, orange);
    }

    get inventory():Item[]{return this._inventory}
    //set inventory(thisInventory){this._inventory = thisInventory}
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