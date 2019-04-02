import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ExportAsModule} from 'ngx-export-as';
import {CatQuotationComponent} from './cat-quotation.component';
import {QuotationRootComponent} from './components/quotation-root/quotation-root.component';
import {QuotationCreateService} from './services/quotation-create.service';
import {QuotationsHttpService} from './services/quotations-http.service';
import {QuotationRoutesModule} from './routes/quotation-routes.module';
import {QuotationCreateComponent} from './components/quotation-create/quotation-create.component';
import {QuotationListComponent} from './components/quotation-list/quotation-list.component';

@NgModule({
  declarations: [
    CatQuotationComponent,
    QuotationRootComponent,
    QuotationCreateComponent,
    QuotationListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    QuotationRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ExportAsModule
  ],
  exports: [
    CatQuotationComponent,
    QuotationRootComponent,
    QuotationCreateComponent,
    QuotationListComponent
  ],
  providers: [
    QuotationCreateService,
    QuotationsHttpService
  ],
  entryComponents: [
  ]
})
export class CatQuotationModule {
}
