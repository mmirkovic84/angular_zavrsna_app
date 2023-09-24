import { product } from "./product";

export class CartItem{
    constructor(product:product){
        this.product = product;
    }
    product:product;
    quantity:number = 1;

    get price():number{
        return this.product.price * this.quantity;
    }
}