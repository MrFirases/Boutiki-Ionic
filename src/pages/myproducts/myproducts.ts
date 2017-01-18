/**
 * Created by moham on 1/17/2017.
 */

import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import {EditProduct} from "../editproduct/editproduct";

@Component({
  selector: 'page-myproducts',
  templateUrl: 'myproducts.html'
})
export class MyProducts {
    product
  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {


  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Voulez-vous supprimer ce produit?',
      message: 'Voulez-vous supprimer ce produit?',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

  editProduct(data) {
    this.navCtrl.push(EditProduct, {
      product : data


    });
  }

}
