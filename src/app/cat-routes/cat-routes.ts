/**
 * @author alain quinones
 */
import {Routes} from '@angular/router';
import {CatHomeComponent} from '../cat-home/cat-home.component';
import {SsiOrganizationComponent} from '../cat-organization/ssi-organization.component';
import {SsiIncidentComponent} from '../cat-incident/ssi-incident.component';

export const ROUTES_CONFIG: Routes = [
  {path: 'home', component: CatHomeComponent},
  {path: 'organization', component: SsiOrganizationComponent},
  {path: 'incident', component: SsiIncidentComponent},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
