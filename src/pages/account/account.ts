import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ChangePassword} from "../changepassword/changepassword";
import {MyProducts} from "../myproducts/myproducts";

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  }

  changePassword() {
    this.navCtrl.push(ChangePassword, {


    });
  }

  openMyProducts() {
    this.navCtrl.push(MyProducts, {


    });
  }

}
