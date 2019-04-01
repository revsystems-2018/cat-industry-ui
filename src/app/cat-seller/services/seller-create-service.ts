import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Customer} from '../../cat-customer/api/Customer';
import {Seller} from '../api/Seller';

@Injectable()
export class SellerCreateService {

  private _customerSubject: BehaviorSubject<Seller>;

  constructor() {
    this._customerSubject = new BehaviorSubject<Seller>(undefined);
  }

  get subject(): Subject<Seller> {
    return this._customerSubject;
  }
}
