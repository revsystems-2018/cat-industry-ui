import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Brand, BrandDTO} from '../api/brand';

@Injectable()
export class BrandsHttpService extends BaseHttpService<Brand, BrandDTO> {

  protected path(): string {
    return '/brands';
  }
}
