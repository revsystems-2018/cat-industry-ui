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
import {ProductCreateService} from '../../services/product-create.service';
import {Brand} from '../../../cat-brand/api/brand';
import {BrandsHttpService} from '../../../cat-brand/services/brands-http.service';
import {FileHttpService} from '../../services/file-http.service';
import {FileUpload, FileUploadDTO} from '../../api/domain/FileUpload';

@Component({
  selector: 'cat-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class ProductCreateComponent implements OnInit, OnDestroy {

  public productFormGroup: FormGroup;
  public product: Product;

  public submitted: boolean;
  public image: string;

  public catalogs: Catalog[];
  public brands: Brand[];
  private _file: File;

  private _productsSubscription: Subscription;
  private _catalogsSubscription: Subscription;
  private _brandsSubscription: Subscription;

  constructor(private _productsHttpService: ProductsHttpService,
              private _catalogsHttpService: CatalogsHttpService,
              private _brandsHttpService: BrandsHttpService,
              private _fileHttpService: FileHttpService,
              private _productCreateService: ProductCreateService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this._initForm();
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._productsSubscription);
    unsubscribe(this._catalogsSubscription);
    unsubscribe(this._brandsSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.productFormGroup.valid) {
      return;
    }

    const productDTO: ProductDTO = this.productFormGroup.value;
    this._productsSubscription = this._productsHttpService.doInsert(productDTO).subscribe(
      (product: Product) => {
        this.product = product;
        this._productCreateService.subject.next(product);
        // this._router.navigate(['/products/list']);
        if (this._file) {
          this._uploadFile(product.id).then(
            (file: FileUpload) => {
              this._navigateToList();
            }
          );
        } else {
          this._navigateToList();
        }
      }
    );
  }

  public onFileChange(event: any): void {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this._file = event.target.files[0];
      reader.readAsDataURL(this._file);

      reader.onload = () => {
        this.image = reader.result;
      };
    }
  }

  private _initForm(): void {
    this.productFormGroup = this._formBuilder.group({
      name: [null, [Validators.required]],
      description: [null],
      catalogId: [null, [Validators.required]],
      brandId: [null, [Validators.required]],
      stock: [null, [Validators.required]],
      price: [null, [Validators.required]]
    });
  }

  private _uploadFile(referenceId: string): Promise<FileUpload> {
    return new Promise<FileUpload>(
      (resolve, reject) => {
        this._fileHttpService.doUpload(this._file, new FileUploadDTO(referenceId)).subscribe(
          (file: FileUpload) => {
            resolve(file);
          }
        );
      }
    );
  }

  private _navigateToList(): void {
    this._router.navigate(['/products/list']);
  }

  private _initialize(): void {
    this._catalogsSubscription = this._catalogsHttpService.doFindAll().subscribe(
      (catalogs: Catalog[]) => {
        this.catalogs = catalogs;
      }
    );

    this._brandsSubscription = this._brandsHttpService.doFindAll().subscribe(
      (brands: Brand[]) => {
        this.brands = brands;
      }
    );
  }
}
