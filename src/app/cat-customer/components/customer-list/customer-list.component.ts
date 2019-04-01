import {Component, OnDestroy, OnInit} from '@angular/core';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';
import {Brand} from '../../../cat-brand/api/brand';
import {Subscription} from 'rxjs';
import {Customer} from '../../api/Customer';
import {CustomersHttpService} from '../../services/customers-http-service';

@Component({
  selector: 'cat-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  public customers: Customer[];

  private _customerSubscription: Subscription;

  constructor(private _customerHttpService: CustomersHttpService) {
    this.customers = [];
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngOnDestroy(): void {
    unsubscribe(this._customerSubscription);
  }

  public onUpdateAction(event: any, brand: Brand): void {
  }

  public onDeleteAction(event: any, brand: Brand): void {
  }

  private _initialize(): void {
    this._customerSubscription = this._customerHttpService.doFindAll().subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
      }
    );
  }
}
