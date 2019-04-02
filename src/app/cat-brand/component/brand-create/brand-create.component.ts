import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Brand, BrandDTO} from '../../api/brand';
import {Router} from '@angular/router';
import {BrandsHttpService} from '../../services/brands-http.service';
import {Subscription} from 'rxjs';
import {BrandCreateService} from '../../services/brand-create.service';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';

@Component({
  selector: 'cat-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.scss']
})
export class BrandCreateComponent implements OnInit, OnDestroy {

  public brandFormGroup: FormGroup;

  public brand: Brand;
  public submitted: boolean;

  private _brandSubscription: Subscription;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _brandCreateService: BrandCreateService,
              private _brandHttpService: BrandsHttpService) {

    this._initForm();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    unsubscribe(this._brandSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.brandFormGroup.valid) {
      return;
    }

    const brandDTO: BrandDTO = this.brandFormGroup.value;
    this._brandSubscription = this._brandHttpService.doInsert(brandDTO).subscribe(
      (brand: Brand) => {
        this.brand = brand;
        this._brandCreateService.subject.next(brand);
        this._router.navigate(['/brands/list']);
      }
    );
  }

  private _initForm(): void {
    this.brandFormGroup = this._formBuilder.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null],
    });
  }
}
