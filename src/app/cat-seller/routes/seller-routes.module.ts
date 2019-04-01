import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SELLER_ROUTES_CONFIG} from './seller-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SELLER_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SellerRoutesModule {
}
