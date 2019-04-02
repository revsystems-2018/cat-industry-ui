import {Routes} from '@angular/router';
import {CustomerRootComponent} from '../components/customer-root/customer-root.component';
import {CustomerListComponent} from '../components/customer-list/customer-list.component';
import {CustomerCreateComponent} from '../components/customer-create/customer-create.component';

export const CUSTOMER_ROUTES_CONFIG: Routes = [
  {
    path: 'customers',
    component: CustomerRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: CustomerListComponent},
          {path: 'create', component: CustomerCreateComponent},
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
