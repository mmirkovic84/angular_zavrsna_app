import { Component } from '@angular/core';
import { ProductService } from '../services/products/product.service';
import { product } from '../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:product[] = [];
  constructor(private productService:ProductService, private route:ActivatedRoute) {}

  ngOnInit():void {
    this.products = this.productService.getAll();
    this.products = this.products.slice(0, 8).sort(() => Math.random() - 0.5);

  }; 

 
  


  
  }


