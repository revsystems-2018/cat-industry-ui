import {Component, OnDestroy, OnInit} from '@angular/core';
import {Customer} from '../../../cat-customer/api/Customer';
import {Subscription} from 'rxjs';
import {CustomersHttpService} from '../../../cat-customer/services/customers-http-service';
import {unsubscribe} from '../../../cat-shared/utils/unsubscribe.function';
import {Brand} from '../../../cat-brand/api/brand';
import {Seller} from '../../api/Seller';
import {SellersHttpService} from '../../services/sellers-http-service';

@Component({
  selector: 'cat-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.scss']
})
export class SellerListComponent implements OnInit, OnDestroy {

  public sellers: Seller[];

  private _sellerSubscription: Subscription;

  constructor(private _sellerHttpService: SellersHttpService) {
    this.sellers = [];
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngOnDestroy(): void {
    unsubscribe(this._sellerSubscription);
  }

  public onUpdateAction(event: any, brand: Seller): void {
  }

  public onDeleteAction(event: any, brand: Seller): void {
  }

  private _initialize(): void {
    this._sellerSubscription = this._sellerHttpService.doFindAll().subscribe(
      (sellers1: Seller[]) => {
        this.sellers = sellers1;
      }
    );
  }
}
