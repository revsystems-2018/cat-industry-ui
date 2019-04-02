import {Routes} from '@angular/router';
import {QuotationRootComponent} from '../components/quotation-root/quotation-root.component';
import {QuotationCreateComponent} from '../components/quotation-create/quotation-create.component';
import {QuotationListComponent} from '../components/quotation-list/quotation-list.component';

export const QUOTATION_ROUTES_CONFIG: Routes = [
  {
    path: 'quotations',
    component: QuotationRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'create', component: QuotationCreateComponent},
          {path: 'list', component: QuotationListComponent},
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
