import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartItem';
import { product } from 'src/app/shared/models/product';
// import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  private cart: Cart = new Cart();
  // cartItems$ = new BehaviorSubject<CartItem[]>([]); 

  addToCart(product: product): void {
    let cartItem = this.cart.items.find(item => item.product.id === product.id);
    if (cartItem) {
      this.changeQuantity(product.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(product));
  }

  removeFromCart(productId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.product.id != productId);
  }

  changeQuantity(productId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.product.id === productId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart{
    return this.cart;
  }

  // clearCart() {
  //   this.cartItems$.next([]);
  //   return this.cart;
  // }
  clearCart() {
    this.cart.items = [];
    return this.cart.items;
  }
  
}
