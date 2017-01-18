import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ProductsPage} from "../products/products";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openProducts(data) {
    this.navCtrl.push(ProductsPage, {
      category: data

    });
  }

}
