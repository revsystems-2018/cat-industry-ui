import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {QUOTATION_ROUTES_CONFIG} from './quotation-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QUOTATION_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class QuotationRoutesModule {
}
