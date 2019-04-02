import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';
import {Customer, CustomerDTO} from '../../api/Customer';
import {CustomerCreateService} from '../../services/customer-create-service';
import {CustomersHttpService} from '../../services/customers-http-service';

@Component({
  selector: 'cat-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit, OnDestroy {

  public customerFormGroup: FormGroup;

  public customer: Customer;
  public submitted: boolean;

  private _brandSubscription: Subscription;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _customerCreateService: CustomerCreateService,
              private _customerHttpService: CustomersHttpService) {
    this._initForm();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    unsubscribe(this._brandSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.customerFormGroup.valid) {
      return;
    }

    const brandDTO: CustomerDTO = this.customerFormGroup.value;
    this._brandSubscription = this._customerHttpService.doInsert(brandDTO).subscribe(
      (customer: Customer) => {
        this.customer = customer;
        this._customerCreateService.subject.next(customer);
        this._router.navigate(['/customers/list']);
      }
    );
  }

  private _initForm(): void {
    this.customerFormGroup = this._formBuilder.group({
      ci: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }
}
