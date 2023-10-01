import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SocialSidebarComponent,
    ShopComponent,
    SingleProductComponent,
    CartPageComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
    CheckoutPageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
