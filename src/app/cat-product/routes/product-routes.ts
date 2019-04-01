/**
 * @author alain.quinones
 */

import {Routes} from '@angular/router';
import {ProductRootComponent} from '../components/product-root/product-root.component';
import {ProductListComponent} from '../components/product-list/product-list.component';
import {ProductCreateComponent} from '../components/product-create/product-create.component';
import {ProductUpdateComponent} from '../components/product-update/product-update.component';


export const PRODUCT_ROUTES_CONFIG: Routes = [
  {
    path: 'products',
    component: ProductRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: ProductListComponent},
          {path: 'create', component: ProductCreateComponent},
          {path: 'update', component: ProductUpdateComponent}
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
