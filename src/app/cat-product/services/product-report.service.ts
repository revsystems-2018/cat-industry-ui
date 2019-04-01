import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class ProductReportService {

  private _productSubject: BehaviorSubject<string>;

  constructor() {
    this._productSubject = new BehaviorSubject<string>(undefined);
  }

  get subject(): Subject<string> {
    return this._productSubject;
  }

}
