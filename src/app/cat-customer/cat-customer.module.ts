import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ExportAsModule} from 'ngx-export-as';
import {CatCustomerComponent} from './cat-customer.component';
import {CustomerRootComponent} from './components/customer-root/customer-root.component';
import {CustomerListComponent} from './components/customer-list/customer-list.component';
import {CustomersHttpService} from './services/customers-http-service';
import {CustomerCreateService} from './services/customer-create-service';
import {CustomerRoutesModule} from './routes/customer-routes.module';

@NgModule({
  declarations: [
    CatCustomerComponent,
    CustomerRootComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    CustomerRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ExportAsModule
  ],
  exports: [
    CatCustomerComponent,
    CustomerRootComponent,
    CustomerListComponent
  ],
  providers: [
    CustomerCreateService,
    CustomersHttpService
  ],
  entryComponents: [
  ]
})
export class CatCustomerModule {
}
