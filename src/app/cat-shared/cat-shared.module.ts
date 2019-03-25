/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {SharedMenuComponent} from './components/shared-menu/shared-menu.component';
import {CatRoutesModule} from '../cat-routes/cat-routes.module';


@NgModule({
  declarations: [
    SharedMenuComponent
  ],
  imports: [
    CatRoutesModule,
    BrowserModule,
    CommonModule,
  ],
  exports: [
    SharedMenuComponent
  ]
})
export class CatSharedModule {
}
