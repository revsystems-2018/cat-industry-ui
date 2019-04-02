import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Catalog} from '../../../cat-product/api/domain/Catalog';
import {Brand} from '../../../cat-brand/api/brand';
import {Subscription} from 'rxjs';
import {ProductCreateService} from '../../../cat-product/services/product-create.service';
import {Router} from '@angular/router';
import {SellerCreateService} from '../../services/seller-create-service';
import {Customer} from '../../../cat-customer/api/Customer';
import {Product, ProductDTO} from '../../../cat-product/api/domain/Product';
import {SellersHttpService} from '../../services/sellers-http-service';
import {ProductsHttpService} from '../../../cat-product/services/products-http.service';
import {CustomersHttpService} from '../../../cat-customer/services/customers-http-service';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';
import {FileUpload} from '../../../cat-product/api/domain/FileUpload';
import {Seller, SellerDTO} from '../../api/Seller';

@Component({
  selector: 'cat-product-create',
  templateUrl: './seller-create.component.html',
  styleUrls: ['./seller-create.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class SellerCreateComponent implements OnInit, OnDestroy {

  public sellerFormGroup: FormGroup;

  public seller: Seller;
  public submitted: boolean;

  public products: Product[];
  public customers: Customer[];

  private _sellerSubscription: Subscription;
  private _productsSubscription: Subscription;
  private _customersSubscription: Subscription;

  constructor(private _sellerHttpService: SellersHttpService,
              private _sellerCreateService: SellerCreateService,
              private _productHttpService: ProductsHttpService,
              private _customerHttpService: CustomersHttpService,
              private _formBuilder: FormBuilder,
              private _router: Router) {

    this._initForm();
    this.products = [];
    this.customers = [];
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngOnDestroy(): void {
    unsubscribe(this._productsSubscription);
    unsubscribe(this._customersSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.sellerFormGroup.valid) {
      return;
    }

    const sellerDTO: SellerDTO = this.sellerFormGroup.value;
    this._sellerSubscription = this._sellerHttpService.doInsert(sellerDTO).subscribe(
      (seller: Seller) => {
        this.seller = seller;
        this._sellerCreateService.subject.next(seller);
        this._router.navigate(['/sellers/list']);
      }
    );
  }

  private _initForm(): void {
    this.sellerFormGroup = this._formBuilder.group({
      quantity: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null],
      productId: [null, [Validators.required]],
      customerId: [null, [Validators.required]],
    });
  }

  private _initialize(): void {
    this._productsSubscription = this._productHttpService.doFindAll().subscribe(
      (products1: Product[]) => {
        this.products = products1;
      }
    );

    this._customersSubscription = this._customerHttpService.doFindAll().subscribe(
      (customers1: Customer[]) => {
        this.customers = customers1;
      }
    );
  }
}
