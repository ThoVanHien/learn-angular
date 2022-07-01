import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product('P01', 'Galaxy S9'),
    new Product('P02', 'Galaxy S19'),
  ];
  constructor() {}
  changeStarRating(message: string) {
    console.log(`Message:${message}`);
  }

  ngOnInit() {}
}
