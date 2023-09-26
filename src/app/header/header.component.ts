import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cart!: Cart;
  activeClass: boolean;  
  constructor(private cartService: CartService, 
             ) {
    this.setCart();

  }
  public removeButtonNotif(){
    let notificationDivBG2 = <HTMLElement> document.querySelector("#notification");
    let numberInCart2 = this.cart.items.length;
    if (numberInCart2 < 1)
    notificationDivBG2.style.backgroundColor = "gray";
  }

  public testCall(){
    let notificationDivBG = <HTMLElement> document.querySelector("#notification");
    let numberInCart = this.cart.items.length;
    if (numberInCart == 0)
    notificationDivBG.style.backgroundColor = "gray";
    if (numberInCart >= 1)
    notificationDivBG.style.backgroundColor = "red";
   return
  }



  
  setCart() {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {


    // const notification = document.getElementById('notification') as HTMLElement;
    // const notification = document.innerText("notification") as HTMLElement;
    // if (this.cart.items.length == 0)
    //  notification.style.backgroundColor = "gray";
    // else 
    // notification.style.backgroundColor = "red";
    //  return
    // let notificationDivBG = <HTMLElement> document.querySelector("#notification");
    // let notificationDivCount = this.cart.items.length;
    //    if (notificationDivCount == 0)
    //    notificationDivBG.style.backgroundColor = "gray";
    //    if (notificationDivCount > 0) 
    // notificationDivBG.style.backgroundColor = "red";
    //  return
  };


}
