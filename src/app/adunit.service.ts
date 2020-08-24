import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }

  addAdUnit(prod_id, quantity, prod_name, cost_price, selling_price){
    const obj = {
      prod_id: prod_id,
      quantity: quantity,
      prod_name: prod_name,
      cost_price: cost_price,
      selling_price: selling_price,
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
}

editAdUnit(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

updateAdUnit(prod_id, quantity, prod_name, cost_price, selling_price, id) {

  const obj = {
    prod_id: prod_id,
    quantity: quantity,
    prod_name: prod_name,
    cost_price: cost_price,
    selling_price: selling_price,
  
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

  deleteAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
