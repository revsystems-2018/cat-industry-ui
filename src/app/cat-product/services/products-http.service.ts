/**
 * @author alain quinones
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Product, ProductDTO} from '../api/domain/Product';

@Injectable()
export class ProductsHttpService extends BaseHttpService<Product, ProductDTO> {

  protected path(): string {
    return '/products';
  }
}
