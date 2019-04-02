import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Quotation, QuotationDTO} from '../api/Quotation';

@Injectable()
export class QuotationsHttpService extends BaseHttpService<Quotation, QuotationDTO> {

  protected path(): string {
    return '/quotations';
  }
}
