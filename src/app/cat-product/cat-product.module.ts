/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ProductRoutesModule} from './routes/product-routes.module';
import {ExportAsModule} from 'ngx-export-as';

import {ProductsHttpService} from './services/products-http-service';
import {CatalogsHttpService} from './services/catalogs-http-service';
import {ProductDeleteService} from './services/product-delete.service';
import {ProductUpdateService} from './services/product-update.service';
import {ProductReportService} from './services/product-report.service';
import {ProductCreateService} from './services/product-create.service';

import {CatProductComponent} from './cat-product.component';
import {ProductRootComponent} from './components/product-root/product-root.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductCreateComponent} from './components/product-create/product-create.component';
import {ProductDeleteComponent} from './components/product-delete/product-delete.component';
import {ProductUpdateComponent} from './components/product-update/product-update.component';
import {ProductReportsComponent} from './components/product-reports/product-reports.component';
import {BrandsHttpService} from '../cat-brand/services/brands-http-service';
import {FileHttpService} from './services/file-http-service';


@NgModule({
  declarations: [
    CatProductComponent,
    ProductRootComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    ProductReportsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ProductRoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ExportAsModule
  ],
  exports: [
    CatProductComponent,
    ProductRootComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    ProductReportsComponent
  ],
  providers: [
    ProductsHttpService,
    CatalogsHttpService,
    BrandsHttpService,
    ProductDeleteService,
    ProductUpdateService,
    ProductReportService,
    ProductCreateService,
    FileHttpService
  ],
  entryComponents: [
    ProductDeleteComponent,
    ProductReportsComponent
  ]
})
export class CatProductModule {
}
