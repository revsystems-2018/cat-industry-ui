import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Quotation, QuotationDTO} from '../../api/Quotation';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';
import {Router} from '@angular/router';
import {QuotationsHttpService} from '../../services/quotations-http.service';
import {QuotationCreateService} from '../../services/quotation-create.service';

@Component({
  selector: 'cat-quotation-create',
  templateUrl: './quotation-create.component.html',
  styleUrls: ['./quotation-create.component.scss']
})
export class QuotationCreateComponent implements OnInit, OnDestroy {

  public quotationFormGroup: FormGroup;

  public quotation: Quotation;
  public submitted: boolean;

  private _quotationSubscription: Subscription;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _quotationHttpService: QuotationsHttpService,
              private _quotationCreateService: QuotationCreateService) {
    this._initForm();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    unsubscribe(this._quotationSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.quotationFormGroup.valid) {
      return;
    }

    const quotationDTO: QuotationDTO = this.quotationFormGroup.value;
    this._quotationSubscription = this._quotationHttpService.doInsert(quotationDTO).subscribe(
      (quotation1: Quotation) => {
        this.quotation = quotation1;
        this._quotationCreateService.subject.next(quotation1);
        this._router.navigate(['/quotations/list']);
      }
    );
  }

  private _initForm(): void {
    this.quotationFormGroup = this._formBuilder.group({
      email: [null, [Validators.required]],
      name: [null, [Validators.required]],
      productName: [null],
      message: [null],
    });
  }

}
