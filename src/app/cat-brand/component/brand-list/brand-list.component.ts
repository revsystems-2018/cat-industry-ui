import {Component, OnDestroy, OnInit} from '@angular/core';
import {Brand} from '../../api/brand';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExportAsConfig, ExportAsService, SupportedExtensions} from 'ngx-export-as';
import {BrandsHttpService} from '../../services/brands-http-service';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';

@Component({
  selector: 'cat-incident-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit, OnDestroy {

  public brands: Brand[];

  private _brandSubscription: Subscription;

  constructor(private _router: Router,
              private _modalService: NgbModal,
              private _exportAsService: ExportAsService,
              private _brandsHttpService: BrandsHttpService) {
    this.brands = [];
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngOnDestroy(): void {
    unsubscribe(this._brandSubscription);
  }

  public onUpdateAction(event: any, brand: Brand): void {
  }

  public onDeleteAction(event: any, brand: Brand): void {
  }

  private _initialize(): void {
    this._brandSubscription = this._brandsHttpService.doFindAll().subscribe(
      (brands: Brand[]) => {
        this.brands = brands;
      }
    );
  }
}
