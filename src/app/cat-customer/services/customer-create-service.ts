import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Customer} from '../api/Customer';

@Injectable()
export class CustomerCreateService {

  private _customerSubject: BehaviorSubject<Customer>;

  constructor() {
    this._customerSubject = new BehaviorSubject<Customer>(undefined);
  }

  get subject(): Subject<Customer> {
    return this._customerSubject;
  }
}
