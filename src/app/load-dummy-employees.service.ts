import {Injectable, OnDestroy} from '@angular/core';
import {CatalogsHttpService} from './cat-product/services/catalogs-http-service';
import {Subscription} from 'rxjs';
import {Catalog, CatalogDTO} from './cat-product/api/domain/Catalog';
import {unsubscribe} from './cat-shared/utils/unsubscribe.function';
import {Product, ProductDTO} from './cat-product/api/domain/Product';
import {ProductsHttpService} from './cat-product/services/products-http-service';
import {Brand, BrandDTO} from './cat-brand/api/brand';
import {BrandsHttpService} from './cat-brand/services/brands-http-service';

@Injectable({
  providedIn: 'root'
})
export class LoadDummyEmployeesService implements OnDestroy {

  private _catalogsHttpServiceSubscription: Subscription;
  private _brandsHttpServiceSubscription: Subscription;
  private _catalogsSubscription: Subscription;
  private _brandsSubscription: Subscription;
  private _productsSubscription: Subscription;

  private _dummyCatalogs: CatalogDTO[];
  private _dummyBrands: BrandDTO[];
  private _dummyProducts: ProductDTO[];

  private brands: Brand[];
  private catalogs: Catalog[];

  constructor(private _catalogsHttpService: CatalogsHttpService,
              private _brandsHttpService: BrandsHttpService,
              private _productHttpService: ProductsHttpService) {
    this.brands = [];
    this.catalogs = [];
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._catalogsHttpServiceSubscription);
    unsubscribe(this._brandsHttpServiceSubscription);
    unsubscribe(this._catalogsSubscription);
    unsubscribe(this._brandsSubscription);
    unsubscribe(this._productsSubscription);
  }

  private _initialize(): void {
    this._dummyCatalogs = [
      new CatalogDTO('Tractors', 'tractors'),
      new CatalogDTO('Motorbikers', 'motorbikers'),
      new CatalogDTO('Loaders', 'loaders'),
      new CatalogDTO('Spares', 'spares'),
    ];

    this._dummyBrands = [
      new BrandDTO('CAT-85', 'CAT', 'catepillar'),
      new BrandDTO('Toyota-82', 'Toyota', 'toyota Inc'),
      new BrandDTO('Nissan-82', 'Nissan', 'Nissan Inc'),
      new BrandDTO('Suzuki-82', 'Suzuki', 'Suzuki Inc')
    ];

    this._catalogsHttpServiceSubscription = this._catalogsHttpService.doFindAll().subscribe(
      (catalogs: Catalog[]) => {
        if (catalogs.length <= 1) {
          this._dummyCatalogs.forEach(
            (catalogDTO: CatalogDTO) => {
              this._catalogsSubscription = this._catalogsHttpService.doInsert(catalogDTO).subscribe(
                (catalog: Catalog) => {
                  this.catalogs.push(catalog);
                }
              );
            }
          );
        }
      }
    );

    this._brandsHttpServiceSubscription = this._catalogsHttpService.doFindAll().subscribe(
      (catalogs: Catalog[]) => {
        if (catalogs.length <= 1) {
          this._dummyCatalogs.forEach(
            (brandDTO: BrandDTO) => {
              this._brandsSubscription = this._brandsHttpService.doInsert(brandDTO).subscribe(
                (brand: Brand) => {
                  this.brands.push(brand);
                }
              );
            }
          );
        }
      }
    );
  }

  private _registerDummyIncidents(catalog: Catalog[], brand: Brand[]): void {
    this._dummyProducts = [
      new ProductDTO(
        'Injury',
        'low Injury in neck',
        catalog[0].id,
        brand[0].id,
        10,
        15588),
      new ProductDTO(
        'Fracture',
        'Arm fracture',
        catalog[1].id,
        brand[1].id,
        15,
        25098),
      new ProductDTO(
        'Fracture 2',
        'Arm fracture v2.0',
        catalog[2].id,
        brand[2].id,
        16,
        28098),

      new ProductDTO(
        'Fracture 3',
        'Arm fracture v3.0',
        catalog[3].id,
        brand[3].id,
        11,
        18098),
    ];

    this._dummyProducts.forEach(
      (dummyProductDTO: ProductDTO) => {
        this._productsSubscription = this._productHttpService.doInsert(dummyProductDTO).subscribe(
          (product: Product) => {
          }
        );
      }
    );
  }
}
