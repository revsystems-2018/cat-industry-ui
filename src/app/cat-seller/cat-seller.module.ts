import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ExportAsModule} from 'ngx-export-as';
import {CatSellerComponent} from './cat-seller.component';
import {SellerRootComponent} from './components/seller-root/seller-root.component';
import {SellersHttpService} from './services/sellers-http-service';
import {SellerCreateService} from './services/seller-create-service';
import {SellerListComponent} from './components/seller-list/seller-list.component';
import {SellerCreateComponent} from './components/seller-create/seller-create.component';
import {SellerRoutesModule} from './routes/seller-routes.module';

@NgModule({
  declarations: [
    CatSellerComponent,
    SellerRootComponent,
    SellerListComponent,
    SellerCreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    SellerRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ExportAsModule
  ],
  exports: [
    CatSellerComponent,
    SellerRootComponent,
    SellerListComponent,
    SellerCreateComponent
  ],
  providers: [
    SellersHttpService,
    SellerCreateService
  ],
  entryComponents: [
  ]
})
export class CatSellerModule {
}
