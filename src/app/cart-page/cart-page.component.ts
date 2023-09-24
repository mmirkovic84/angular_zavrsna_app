import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { ProductService } from '../services/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']

  
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { 
    this.setCart();
  }

removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.product.id);
  this.setCart();
}

changeQuantity(cartItem:CartItem, quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.product.id, quantity);
 

  this.setCart();
}

  setCart() {
    this.cart = this.cartService.getCart();
  }

  checkOut(){
     this.router.navigateByUrl('/checkout-page');
  }
  
}
