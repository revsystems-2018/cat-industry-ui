import {Component, OnDestroy, OnInit} from '@angular/core';
import {Brand} from '../../../cat-brand/api/brand';
import {Subscription} from 'rxjs';
import {Quotation} from '../../api/Quotation';
import {QuotationsHttpService} from '../../services/quotations-http.service';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExportAsService} from 'ngx-export-as';

@Component({
  selector: 'cat-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.scss']
})
export class QuotationListComponent implements OnInit, OnDestroy {

  public quotations: Quotation[];

  private _quotationSubscription: Subscription;

  constructor(private _router: Router,
              private _modalService: NgbModal,
              private _exportAsService: ExportAsService,
              private _quotationHttpService: QuotationsHttpService) {
    this.quotations = [];
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngOnDestroy(): void {
    unsubscribe(this._quotationSubscription);
  }

  public onUpdateAction(event: any, brand: Quotation): void {
  }

  public onDeleteAction(event: any, brand: Quotation): void {
  }

  private _initialize(): void {
    this._quotationSubscription = this._quotationHttpService.doFindAll().subscribe(
      (quotations1: Quotation[]) => {
        this.quotations = quotations1;
      }
    );
  }
}
