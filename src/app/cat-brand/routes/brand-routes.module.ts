import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BRAND_ROUTES_CONFIG} from './brand-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BRAND_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class BrandRoutesModule {
}
