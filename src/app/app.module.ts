import { ProductslistService } from './service/productslist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatPaginatorModule, MatSliderModule} from '@angular/material';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IgxSliderModule, IgxInputGroupModule } from 'igniteui-angular';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatPaginatorModule,
  MatSliderModule
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    materialModules,
    FormsModule,
    IgxInputGroupModule,
    IgxSliderModule,
    ReactiveFormsModule
  ],
  exports: materialModules,
  providers: [ProductslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
