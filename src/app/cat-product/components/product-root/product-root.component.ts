/**
 * @author alain quinones
 */

import {Component, OnInit} from '@angular/core';
import {ProductReportService} from '../../services/product-report.service';
import {ProductsHttpService} from '../../services/products-http-service';
import {Product} from '../../api/domain/Product';
import {ProductDeleteService} from '../../services/product-delete.service';
import {ProductCreateService} from '../../services/product-create.service';
import {MODAL_PRODUCT} from '../product-delete/product-delete.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cat-product-root',
  templateUrl: './product-root.component.html',
  styleUrls: ['./product-root.component.scss']
})
export class ProductRootComponent implements OnInit {

  public disabledReports: boolean;

  public incidents: Product[];

  constructor(private _reportService: ProductReportService,
              private _productHttpService: ProductsHttpService,
              private _productDeleteService: ProductDeleteService,
              private _productCreateService: ProductCreateService,
              private _modalService: NgbModal) {
    this.disabledReports = true;

  }

  ngOnInit() {
    this._initialize();
  }

  public onReportAction(event: any): void {
    this._modalService.open(MODAL_PRODUCT.reportProduct);
  }

  private _initialize(): void {
    this._productHttpService.doFindAll().subscribe(
      (products: Product[]) => {
        this.incidents = products;

        this.disabledReports = !(this.incidents.length > 0);
      }
    );

    this._productDeleteService.subject.asObservable().subscribe(
      (product: Product) => {
        if (product) {
          const index = this.incidents.findIndex(value => value.id === product.id);
          if (index > -1) {
            this.incidents.splice(index, 1);
          }

          this.disabledReports = !(this.incidents.length > 0);
        }
      }
    );

    this._productCreateService.subject.asObservable().subscribe(
      (product: Product) => {
        if (product) {
          this.incidents.push(product);

          this.disabledReports = !(this.incidents.length > 0);
        }
      }
    );
  }
}
