import {Routes} from '@angular/router';
import {CustomerListComponent} from '../../cat-customer/components/customer-list/customer-list.component';
import {SellerRootComponent} from '../components/seller-root/seller-root.component';

export const SELLER_ROUTES_CONFIG: Routes = [
  {
    path: 'sellers',
    component: SellerRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: CustomerListComponent},
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
