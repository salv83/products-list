import { ListComponent } from './list/list.component';
import { Component, ViewChild } from '@angular/core';
import { ProductslistService } from './service/productslist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductList';
  @ViewChild(ListComponent,  {static: true}) list: ListComponent;

  constructor(private listservice: ProductslistService) { }

  applySelection($event){
    this.getSelectedProducts($event);
  }

  getSelectedProducts(event) {
    this.listservice.getSelectedProducts(event)
      .subscribe(data =>  {
        this.list.pagedList = data[0]['results'];
    });
  }

}

