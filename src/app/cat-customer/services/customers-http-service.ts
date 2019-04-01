import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Customer, CustomerDTO} from '../api/Customer';

@Injectable()
export class CustomersHttpService extends BaseHttpService<Customer, CustomerDTO> {

  protected path(): string {
    return '/customers';
  }
}
