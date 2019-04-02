import {Component, OnInit} from '@angular/core';
import {Brand} from '../../../cat-brand/api/brand';
import {Quotation} from '../../api/Quotation';
import {QuotationsHttpService} from '../../services/quotations-http.service';
import {QuotationCreateService} from '../../services/quotation-create.service';

@Component({
  selector: 'cat-brand-root',
  templateUrl: './quotation-root.component.html',
  styleUrls: ['./quotation-root.component.scss']
})
export class QuotationRootComponent implements OnInit {

  public disabledReports: boolean;
  public quotations: Quotation[];

  constructor(private _quotationHttpService: QuotationsHttpService,
              private _quotationCreateService: QuotationCreateService) {
    this.disabledReports = true;
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._quotationHttpService.doFindAll().subscribe(
      (quotations1: Quotation[]) => {
        this.quotations = quotations1;

        this.disabledReports = !(this.quotations.length > 0);
      }
    );

    this._quotationCreateService.subject.asObservable().subscribe(
      (quotation: Quotation) => {
        if (quotation) {
          this.quotations.push(quotation);

          this.disabledReports = !(this.quotations.length > 0);
        }
      }
    );
  }
}
