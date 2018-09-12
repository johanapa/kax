import { Component, PipeTransform } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CoopProducts, DirectProduct } from './models/coop.model';

import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kax';
  coopProducts: CoopProducts = new CoopProducts();

  constructor(private http: HttpClient) {
    this.getCoop();
  }

  getCoop() {
    const coopUrl = 'http://localhost:3000/coop_products';
    this.http.get<CoopProducts>(coopUrl)
      .pipe(
        map( res => {
          res.directProducts =  res.directProducts.sort((a: DirectProduct, b: DirectProduct) => a.price <= b.price ? 1 : -1);
          this.coopProducts = res;
        })
      )
      .subscribe();
  }
}


