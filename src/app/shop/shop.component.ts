import { Component } from '@angular/core';
import { ProductService } from '../services/products/product.service';
import { product } from '../shared/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  products:product[] = [];
  constructor(private productService:ProductService, private route:ActivatedRoute) {}

  ngOnInit():void {
   this.route.params.subscribe(params => {
    if(params.searchTerm) 
      this.products = this.productService.getAll().filter(product => product.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
    else if(params.tag)
    this.products =this.productService.getAllProductsByTag(params.tag);
    else
    this.products = this.productService.getAll();
    this.products = this.products.sort(() => Math.random() - 0.5);
   })

  }


}
