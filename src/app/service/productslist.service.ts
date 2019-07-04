import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = "https://visaya.solutions/en/rest/V1/visaya/search/devices/?categories[]=51&order_by=score&order=desc&current_page=1&per_page=5";

@Injectable({
  providedIn: 'root'
})
export class ProductslistService {

  private option: HttpHeaders = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(url);
  }

  getSelectedProducts(selectionData): Observable<Product[]> {
    var selectionurl = "https://visaya.solutions/en/rest/V1/visaya/search/devices/?categories[]=51&order=desc&current_page=1&per_page=5";
    var queryString = '';
    if (selectionData.chemapp !== null)
      queryString = queryString + "&industry_or_application[]=" + selectionData.chemapp;
    if (selectionData.gfpiping !== null)
      queryString = queryString + "&manufacturer[]=" + selectionData.gfpiping;
    if (selectionData.coriolis !== null)
      queryString = queryString + "&measurement_technology_paramet[]=" + selectionData.coriolis;
    if (selectionData.name !== null)
      queryString = queryString + "&order_by=name";
    if (selectionData.score !== null)
      queryString = queryString + "&order_by=score";
    if (selectionData.price !== null)
      queryString = queryString + "&order_by=price";
    if ((selectionData.price == null) && (selectionData.score == null) && (selectionData.name == null))
      queryString = queryString + "&order_by=score";
    queryString = queryString + "&from_price=" + selectionData.pricelower;
    queryString = queryString + "&to_price=" + selectionData.priceupper;
    return this.http.get<Product[]>(selectionurl+queryString);
  }


}
