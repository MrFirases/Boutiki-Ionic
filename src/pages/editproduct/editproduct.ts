/**
 * Created by moham on 1/18/2017.
 */
import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {Camera} from "ionic-native";


@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html'
})
export class EditProduct {

  product
  firstBase64Image;
  secondBase64Image;
  thirdBase64Image;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.product = this.navParams.get('product');
  }


  firstAccessGallery(){
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.firstBase64Image = 'data:image/jpeg;base64,'+imageData;
    }, (err) => {
      console.log(err);
    });
  }

  secondAccessGallery(){
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.secondBase64Image = 'data:image/jpeg;base64,'+imageData;
    }, (err) => {
      console.log(err);
    });
  }

  thirdAccessGallery(){
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.thirdBase64Image = 'data:image/jpeg;base64,'+imageData;
    }, (err) => {
      console.log(err);
    });
  }

}
