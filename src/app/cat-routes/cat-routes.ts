/**
 * @author alain quinones
 */
import {Routes} from '@angular/router';
import {CatHomeComponent} from '../cat-home/cat-home.component';
import {SsiOrganizationComponent} from '../cat-organization/ssi-organization.component';
import {CatProductComponent} from '../cat-product/cat-product.component';
import {CatBrandComponent} from '../cat-brand/cat-brand.component';
import {CatCustomerComponent} from '../cat-customer/cat-customer.component';
import {CatSellerComponent} from '../cat-seller/cat-seller.component';
import {CatQuotationComponent} from '../cat-quotation/cat-quotation.component';

export const ROUTES_CONFIG: Routes = [
  {path: 'home', component: CatHomeComponent},
  {path: 'organization', component: SsiOrganizationComponent},
  {path: 'products', component: CatProductComponent},
  {path: 'brands', component: CatBrandComponent},
  {path: 'customers', component: CatCustomerComponent},
  {path: 'sellers', component: CatSellerComponent},
  {path: 'quotations', component: CatQuotationComponent},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
