import {Routes} from '@angular/router';
import {CustomerRootComponent} from '../components/customer-root/customer-root.component';
import {CustomerListComponent} from '../components/customer-list/customer-list.component';

export const CUSTOMER_ROUTES_CONFIG: Routes = [
  {
    path: 'customers',
    component: CustomerRootComponent,
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
