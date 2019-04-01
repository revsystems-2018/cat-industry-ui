import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ExportAsModule} from 'ngx-export-as';
import {CatBrandComponent} from './cat-brand.component';
import {BrandRoutesModule} from './routes/brand-routes.module';
import {BrandRootComponent} from './component/brand-root/brand-root.component';
import {BrandCreateComponent} from './component/brand-create/brand-create.component';
import {BrandCreateService} from './services/brand-create-service';
import {BrandsHttpService} from './services/brands-http-service';
import {BrandListComponent} from './component/brand-list/brand-list.component';

@NgModule({
  declarations: [
    CatBrandComponent,
    BrandRootComponent,
    BrandCreateComponent,
    BrandListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrandRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ExportAsModule
  ],
  exports: [
    CatBrandComponent,
    BrandRootComponent,
    BrandCreateComponent,
    BrandListComponent
  ],
  providers: [
    BrandCreateService,
    BrandsHttpService
  ],
  entryComponents: [
  ]
})
export class CatBrandModule {
}
