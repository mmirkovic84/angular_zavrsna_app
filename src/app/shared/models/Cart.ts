import { CartItem } from "./cartItem";

export class Cart {
    items: CartItem[] = [];

    get subtotalPrice(): number {
        let subtotalPrice = 0;
        
        this.items.forEach(item => {
            subtotalPrice += item.price;
        });
        return subtotalPrice;
    }

    get shippingPrice(): number {
        let shippingPrice = 0;
        
        this.items.forEach(item => {
            shippingPrice += item.price;
        });
       if(this.subtotalPrice < 100)
       shippingPrice = 100;
    else
    shippingPrice = 0;
        return shippingPrice;
    }

    get totalPrice(): number {
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });

        totalPrice = this.shippingPrice + this.subtotalPrice;
        return totalPrice;
    }

 



}