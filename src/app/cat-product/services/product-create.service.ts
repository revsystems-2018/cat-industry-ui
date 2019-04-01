import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Product} from '../api/domain/Product';

@Injectable()
export class ProductCreateService {

  private _productSubject: BehaviorSubject<Product>;

  constructor() {
    this._productSubject = new BehaviorSubject<Product>(undefined);
  }

  get subject(): Subject<Product> {
    return this._productSubject;
  }

}
