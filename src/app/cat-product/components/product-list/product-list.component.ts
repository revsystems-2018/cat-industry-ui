/**
 * @author alain quinones
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsHttpService} from '../../services/products-http.service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';
import {Product} from '../../api/domain/Product';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MODAL_PRODUCT} from '../product-delete/product-delete.component';
import {ProductDeleteService} from '../../services/product-delete.service';
import {ProductUpdateService} from '../../services/product-update.service';
import {Router} from '@angular/router';
import {ExportAsConfig, ExportAsService, SupportedExtensions} from 'ngx-export-as';
import {ProductReportService} from '../../services/product-report.service';

@Component({
  selector: 'cat-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public products: Product[];

  private _productsSubscription: Subscription;
  private _productsDeleteSubscription: Subscription;
  private _productsReportSubscription: Subscription;

  constructor(private _productsHttpService: ProductsHttpService,
              private _productDeleteService: ProductDeleteService,
              private _productUpdateService: ProductUpdateService,
              private _productReportService: ProductReportService,
              private _router: Router,
              private _modalService: NgbModal,
              private _exportAsService: ExportAsService) {
    this.products = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._productsSubscription);
    unsubscribe(this._productsDeleteSubscription);
    unsubscribe(this._productsReportSubscription);
  }

  public onUpdateAction(event: any, product: Product): void {
    this._productUpdateService.subject.next(product);
    this._router.navigate(['/products/update']);
  }

  public onDeleteAction(event: any, product: Product): void {
    const modalInstance = this._modalService.open(MODAL_PRODUCT.deleteProduct);
    modalInstance.componentInstance.product = product;
  }

  private _initialize(): void {
    this._productsSubscription = this._productsHttpService.doFindAll().subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );

    this._productsDeleteSubscription = this._productDeleteService.subject.asObservable().subscribe(
      (product: Product) => {
        const index = this.products.findIndex(value => value.id === product.id);
        if (index > -1) {
          this.products.splice(index, 1);
        }
      }
    );

    this._productsReportSubscription = this._productReportService.subject.asObservable().subscribe(
      (format: string) => {
        if (this.products.length > 0) {
          const exportAsConfig: ExportAsConfig = {
            type: format as SupportedExtensions,
            elementId: 'table'
          };

          this._exportAsService.save(exportAsConfig, 'products');
        }
      }
    );
  }
}
