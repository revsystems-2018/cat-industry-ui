import {Component, OnInit} from '@angular/core';
import {Seller} from '../../api/Seller';
import {SellersHttpService} from '../../services/sellers-http-service';
import {SellerCreateService} from '../../services/seller-create-service';

@Component({
  selector: 'cat-seller-root',
  templateUrl: './seller-root.component.html',
  styleUrls: ['./seller-root.component.scss']
})
export class SellerRootComponent implements OnInit {

  public disabledReports: boolean;

  public sellers: Seller[];

  constructor(private _sellersHttpService: SellersHttpService,
              private _customerCreateService: SellerCreateService) {
    this.disabledReports = false;
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._sellersHttpService.doFindAll().subscribe(
      (sellers: Seller[]) => {
        this.sellers = sellers;

        this.disabledReports = !(this.sellers.length > 0);
      }
    );
  }
}
