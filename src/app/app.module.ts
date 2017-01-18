import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AddProductPage } from '../pages/addproduct/addproduct';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ProductsPage} from "../pages/products/products";
import {ProductPage} from "../pages/product/product";
import {ChangePassword} from "../pages/changepassword/changepassword";
import {MyProducts} from "../pages/myproducts/myproducts";
import {EditProduct} from "../pages/editproduct/editproduct";

@NgModule({
  declarations: [
    MyApp,
    AddProductPage,
    AccountPage,
    HomePage,
    TabsPage,
    ProductsPage,
    ProductPage,
    ChangePassword,
    MyProducts,
    EditProduct
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddProductPage,
    AccountPage,
    HomePage,
    TabsPage,
    ProductsPage,
    ProductPage,
    ChangePassword,
    MyProducts,
    EditProduct
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
