import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Brand} from '../api/brand';

@Injectable()
export class BrandCreateService {

  private _incidentSubject: BehaviorSubject<Brand>;

  constructor() {
    this._incidentSubject = new BehaviorSubject<Brand>(undefined);
  }

  get subject(): Subject<Brand> {
    return this._incidentSubject;
  }
}
