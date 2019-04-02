import {Routes} from '@angular/router';
import {SellerRootComponent} from '../components/seller-root/seller-root.component';
import {SellerCreateComponent} from '../components/seller-create/seller-create.component';
import {SellerListComponent} from '../components/seller-list/seller-list.component';

export const SELLER_ROUTES_CONFIG: Routes = [
  {
    path: 'sellers',
    component: SellerRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: SellerListComponent},
          {path: 'create', component: SellerCreateComponent},
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
