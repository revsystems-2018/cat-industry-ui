/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {OrganizationRoutesModule} from './routes/organization-routes.module';

import {SsiOrganizationComponent} from './ssi-organization.component';

import {OrganizationRootComponent} from './components/organization-root/organization-root.component';
import {OrganizationMainComponent} from './components/organization-main/organization-main.component';
import {OrganizationDepartmentComponent} from './components/organization-department/organization-department.component';
import {OrganizationPositionComponent} from './components/organization-position/organization-position.component';



@NgModule({
  declarations: [
    SsiOrganizationComponent,
    OrganizationRootComponent,
    OrganizationMainComponent,
    OrganizationDepartmentComponent,
    OrganizationPositionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    OrganizationRoutesModule,
  ],
  exports: [
    SsiOrganizationComponent,
    OrganizationRootComponent,
    OrganizationMainComponent,
    OrganizationDepartmentComponent,
    OrganizationPositionComponent

  ]
})
export class SsiOrganizationModule {
}
