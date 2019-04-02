/**
 * @author alain quinones
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsHttpService} from '../../services/products-http.service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';
import {Product, ProductDTO} from '../../api/domain/Product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CatalogsHttpService} from '../../services/catalogs-http.service';
import {Catalog} from '../../api/domain/Catalog';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {ProductUpdateService} from '../../services/product-update.service';
import {Brand} from '../../../cat-brand/api/brand';
import {BrandsHttpService} from '../../../cat-brand/services/brands-http.service';

@Component({
  selector: 'cat-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class ProductUpdateComponent implements OnInit, OnDestroy {

  public productFormGroup: FormGroup;
  public product: Product;

  public submitted: boolean;

  public catalogs: Catalog[];
  public brands: Brand[];

  public productTypes: string[];
  public productSeverities: string[];

  private _productsUpdateSubscription: Subscription;
  private _productsSubscription: Subscription;
  private _employeesSubscription: Subscription;
  private _brandsSubscription: Subscription;


  constructor(private _productsHttpService: ProductsHttpService,
              private _catalogsHttpService: CatalogsHttpService,
              private _brandsHttpService: BrandsHttpService,
              private _productUpdateService: ProductUpdateService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this._initForm();

    this.productTypes = Object.keys(null);
    this.productSeverities = Object.keys(null);
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    this._productUpdateService.subject.next(undefined);
    unsubscribe(this._productsSubscription);
    unsubscribe(this._employeesSubscription);
    unsubscribe(this._productsUpdateSubscription);
    unsubscribe(this._brandsSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.productFormGroup.valid) {
      return;
    }

    const productDTO: ProductDTO = this.productFormGroup.value;
    this._productsSubscription = this._productsHttpService.doUpdate(this.product.id, productDTO).subscribe(
      (product: Product) => {
        this.product = product;
        this._router.navigate(['/products/list']);
      }
    );
  }

  private _initForm(): void {
    this.productFormGroup = this._formBuilder.group({
      name: [null, [Validators.required]],
      description: [null],
      date: [null, [Validators.required]],
      type: [null, [Validators.required]],
      severity: [null, [Validators.required]],
      employeeId: [null, [Validators.required]]
    });
  }

  private _initialize(): void {
    this._employeesSubscription = this._catalogsHttpService.doFindAll().subscribe(
      (catalogs: Catalog[]) => {
        this.catalogs = catalogs;
      }
    );

    this._brandsSubscription = this._brandsHttpService.doFindAll().subscribe(
      (brands: Brand[]) => {
        this.brands = brands;
      }
    );

    this._productsUpdateSubscription = this._productUpdateService.subject.asObservable().subscribe(
      (product: Product) => {
        if (product) {
          this.product = product;
          const productDTO = new ProductDTO(
            product.name,
            product.description,
            product.catalog.id,
            product.brand.id,
            product.stock,
            product.price);
          this.productFormGroup.patchValue(productDTO);
        } else {
          this._router.navigate(['products/list']);
        }
      }
    );
  }
}
