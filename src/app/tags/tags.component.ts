import { Component } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { ProductService } from '../services/products/product.service';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tags:Tag[] = [];
  constructor(private productService:ProductService ) {}

  ngOnInit(): void {
    this.tags = this.productService.getAllTags();
  }
}
