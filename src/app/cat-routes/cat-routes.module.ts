/**
 * @author alain quinones
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES_CONFIG} from './cat-routes';
import {CatHomeModule} from '../cat-home/cat-home.module';
import {SsiOrganizationModule} from '../cat-organization/ssi-organization.module';
import {SsiIncidentModule} from '../cat-incident/ssi-incident.module';


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES_CONFIG),
    CatHomeModule,
    SsiOrganizationModule,
    SsiIncidentModule
  ],
  exports: [RouterModule]
})
export class CatRoutesModule {

}
