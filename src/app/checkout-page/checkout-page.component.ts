import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { ProductService } from '../services/products/product.service';
import { product } from '../shared/models/product';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  cart!: Cart;
  products:product[] = [];
  constructor(private cartService: CartService,
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { 
    this.setCart();

  }

  // removeFromCart(cartItem:CartItem){
  //   this.cartService.removeFromCart(cartItem.product.id);
  //   this.setCart();
  // }

  setCart() {
    this.cart = this.cartService.getCart();
  }

}
