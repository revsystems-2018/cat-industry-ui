import {Component, OnInit} from '@angular/core';
import {CustomersHttpService} from '../../services/customers-http-service';
import {CustomerCreateService} from '../../services/customer-create-service';
import {Customer} from '../../api/Customer';

@Component({
  selector: 'cat-customer-root',
  templateUrl: './customer-root.component.html',
  styleUrls: ['./customer-root.component.scss']
})
export class CustomerRootComponent implements OnInit {

  public disabledReports: boolean;

  public cutomers: Customer[];

  constructor(private _customersHttpService: CustomersHttpService,
              private _customerCreateService: CustomerCreateService) {
    this.disabledReports = false;
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._customersHttpService.doFindAll().subscribe(
      (customers: Customer[]) => {
        this.cutomers = customers;

        this.disabledReports = !(this.cutomers.length > 0);
      }
    );
  }
}
