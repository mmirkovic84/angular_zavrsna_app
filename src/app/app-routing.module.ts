import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'product/:id', component: SingleProductComponent },
  {path: 'cart-page', component:CartPageComponent},
  {path:'search/:searchTerm', component: ShopComponent},
  {path: 'tag/:tag', component: ShopComponent},
  {path: 'checkout-page', component: CheckoutPageComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
