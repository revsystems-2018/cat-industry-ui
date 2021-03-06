/**
 * @author alain quinones
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES_CONFIG} from './cat-routes';
import {CatHomeModule} from '../cat-home/cat-home.module';
import {SsiOrganizationModule} from '../cat-organization/ssi-organization.module';
import {CatProductModule} from '../cat-product/cat-product.module';
import {CatBrandModule} from '../cat-brand/cat-brand.module';
import {CatCustomerModule} from '../cat-customer/cat-customer.module';
import {CatSellerModule} from '../cat-seller/cat-seller.module';
import {CatQuotationModule} from '../cat-quotation/cat-quotation.module';

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES_CONFIG),
    CatHomeModule,
    SsiOrganizationModule,
    CatProductModule,
    CatBrandModule,
    CatCustomerModule,
    CatSellerModule,
    CatQuotationModule
  ],
  exports: [RouterModule]
})
export class CatRoutesModule {

}
