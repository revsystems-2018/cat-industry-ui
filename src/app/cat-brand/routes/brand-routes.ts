import {Routes} from '@angular/router';
import {BrandRootComponent} from '../component/brand-root/brand-root.component';
import {BrandCreateComponent} from '../component/brand-create/brand-create.component';
import {BrandListComponent} from '../component/brand-list/brand-list.component';


export const BRAND_ROUTES_CONFIG: Routes = [
  {
    path: 'brands',
    component: BrandRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'create', component: BrandCreateComponent},
          {path: 'list', component: BrandListComponent},
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
