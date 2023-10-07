import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { ProductService } from '../services/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  providers: [HeaderComponent]

})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private headerComponent: HeaderComponent) {
    this.setCart();
  }


  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);


    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  checkOut() {
    this.router.navigateByUrl('/checkout-page');
  }
  clearCart() {
    this.cart.items = [];
    return this.cart.items;
  }
}
