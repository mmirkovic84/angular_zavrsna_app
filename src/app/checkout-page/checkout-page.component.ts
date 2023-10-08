import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { ProductService } from '../services/products/product.service';
import { product } from '../shared/models/product';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  cart!: Cart;
  products:product[] = [];
  cartItems$: any;
  constructor(public cartService: CartService,
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router,private fb: FormBuilder) { 
    this.setCart();

  }

  checkoutForm: FormGroup = new FormGroup ({
    name:new FormControl('', [Validators.required]),
    surname:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),
    message:new FormControl(''),
    payment:new FormControl('')
  })

  submitted = false;
   
    ngOnInit(): void {
        this.checkoutForm = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.minLength(10)]],
            address: ['', Validators.required],
            message: ['', Validators.required],
            payment: ['', Validators.required]
        });
    }
    get f(): {
        [key: string]: AbstractControl
    } {
        return this.checkoutForm.controls;
    }

  // checkout() {
  //   console.warn(this.checkoutForm.value)
  // }

  // get name(){
  //   return this.checkoutForm.get('name')
  // }



  onSubmit(): void {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
        return;
    }
    this.clearCart();
    this.router.navigate(['/thank-you']);
    
}

  setCart() {
    this.cart = this.cartService.getCart();
  }
  clearCart() {
    this.cart.items = [];
    return this.cart.items;
  }
}
