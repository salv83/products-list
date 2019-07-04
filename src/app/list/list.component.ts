import { ProductslistService } from './../service/productslist.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/product';
import { MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[];
  pagedList: Product[] = [];
  length = 100;
  pageSize = 3;
  pageSizeOptions: number[] = [1, 2, 3];
  @ViewChild(MatPaginator,  {static: true}) paginator: MatPaginator;

  constructor(private listservice: ProductslistService) { }

  getAllProduct() {
    this.listservice.getAll()
      .subscribe(data =>  {
        this.products = data[0]['results'];
        this.pagedList = this.products.slice(0, 3);
        this.length = this.products.length;
    });
  }

  OnPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.products.slice(startIndex, endIndex);
  }

  ngOnInit() {
    this.getAllProduct();
  }

}
