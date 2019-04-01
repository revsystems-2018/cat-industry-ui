/**
 * @author alain.quinones
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {PRODUCT_ROUTES_CONFIG} from './product-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ProductRoutesModule {
}
