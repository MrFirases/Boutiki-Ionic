import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {ProductPage} from "../product/product";

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  category;
  items = [];
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.initializeItems();
    console.log(this.navParams.get('category'));
    this.category = this.navParams.get('category');

    for (let item = 0; item < 8; item++) {
      this.items.push( this.items.length );
    }

  }

  openProduct(data) {
    this.navCtrl.push(ProductPage, {
      product: data

    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  initializeItems() {
    this.items = [
      'Iphone 7',
      'Samsung Galaxy s7',
      'Samsung TV',
      'Asus Laptop'

    ];
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let item = 0; item < 8; item++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }



  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
