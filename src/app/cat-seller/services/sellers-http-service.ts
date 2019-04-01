import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Seller, SellerDTO} from '../api/Seller';

@Injectable()
export class SellersHttpService extends BaseHttpService<Seller, SellerDTO> {

  protected path(): string {
    return '/sellers';
  }
}
