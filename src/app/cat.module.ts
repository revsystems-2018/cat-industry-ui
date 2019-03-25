import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatRoutesModule} from './cat-routes/cat-routes.module';
import {CatSharedModule} from './cat-shared/cat-shared.module';

import {CatComponent} from './cat.component';


@NgModule({
  declarations: [
    CatComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CatSharedModule,
    CatRoutesModule,
  ],
  providers: [],
  bootstrap: [CatComponent]
})
export class CatModule {
}
