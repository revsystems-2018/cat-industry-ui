import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOMER_ROUTES_CONFIG} from './customer-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOMER_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CustomerRoutesModule {
}
