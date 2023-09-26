import { Component } from '@angular/core';
import { product } from '../shared/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/products/product.service';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { Cart } from '../shared/models/Cart';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
  providers:[HeaderComponent]
})
export class SingleProductComponent {
  bgColor : string = 'grey';
  cart!: Cart;
  product!: product;
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router:Router,
    private headerComponent: HeaderComponent) {
      this.setCart();
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.product = productService.getProductById(params.id);
    })
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    // this.router.navigateByUrl('/cart-page');
    
  }

  public callMe(): void {
    this.headerComponent.testCall();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  goPrevious(){
    let previousId = this.product.id - 1;
    this.router.navigate(['/product', previousId]);
  }

  goNext(){
    let nextId = this.product.id + 1;
    this.router.navigate(['/product', nextId]);
  }

}
