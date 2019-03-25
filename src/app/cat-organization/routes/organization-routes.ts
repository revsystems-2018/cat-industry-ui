/**
 * @author alain.quinones
 */

import {Routes} from '@angular/router';
import {OrganizationRootComponent} from '../components/organization-root/organization-root.component';

import {OrganizationMainComponent} from '../components/organization-main/organization-main.component';
import {OrganizationDepartmentComponent} from '../components/organization-department/organization-department.component';
import {OrganizationPositionComponent} from '../components/organization-position/organization-position.component';


export const ORGANIZATION_ROUTES_CONFIG: Routes = [
  {
    path: 'organization',
    component: OrganizationRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'main', component: OrganizationMainComponent},
          {path: 'department', component: OrganizationDepartmentComponent},
          {path: 'position', component: OrganizationPositionComponent}

        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
