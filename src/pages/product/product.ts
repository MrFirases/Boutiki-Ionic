import { Component } from '@angular/core';

import {CallNumber} from 'ionic-native';

import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  product;
  number;
  constructor(public navCtrl: NavController,public navParams: NavParams) {

    console.log(this.navParams.get('product'));
    this.product = this.navParams.get('product');
  }

callSeller(sellerNumber)
{

    CallNumber.callNumber(sellerNumber, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
}

}
