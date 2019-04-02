import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Quotation} from '../api/Quotation';

@Injectable()
export class QuotationCreateService {

  private _quotationSubject: BehaviorSubject<Quotation>;

  constructor() {
    this._quotationSubject = new BehaviorSubject<Quotation>(undefined);
  }

  get subject(): Subject<Quotation> {
    return this._quotationSubject;
  }
}
