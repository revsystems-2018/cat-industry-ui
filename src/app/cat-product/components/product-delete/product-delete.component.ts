/**
 * @author alain quinones
 */

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductsHttpService} from '../../services/products-http.service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';
import {Product} from '../../api/domain/Product';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductDeleteService} from '../../services/product-delete.service';
import {ProductReportsComponent} from '../product-reports/product-reports.component';

@Component({
  selector: 'cat-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit, OnDestroy {
  @Input() public product: Product;

  private _productsSubscription: Subscription;

  constructor(private _productsHttpService: ProductsHttpService,
              private _productDeleteService: ProductDeleteService,
              public modal: NgbActiveModal) {
  }

  public ngOnInit(): void {
    if (!this.product) {
      this.product = new Product();
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this._productsSubscription);
  }

  public delete(): void {
    this._productsSubscription = this._productsHttpService.doDelete(this.product.id).subscribe(
      (incident: Product) => {
        this._productDeleteService.subject.next(incident);
        this.modal.close('Ok click');
      }
    );
  }
}

export const MODAL_PRODUCT = {
  deleteProduct: ProductDeleteComponent,
  reportProduct: ProductReportsComponent
};
