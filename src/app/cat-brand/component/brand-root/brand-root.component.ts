import {Component, OnInit} from '@angular/core';
import {Brand} from '../../api/brand';
import {BrandCreateService} from '../../services/brand-create.service';
import {BrandsHttpService} from '../../services/brands-http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'cat-brand-root',
  templateUrl: './brand-root.component.html',
  styleUrls: ['./brand-root.component.scss']
})
export class BrandRootComponent implements OnInit {

  public disabledReports: boolean;
  public brands: Brand[];

  constructor(private _brandCreateService: BrandCreateService,
              private _brandHttpService: BrandsHttpService) {

    this.disabledReports = true;
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._brandHttpService.doFindAll().subscribe(
      (brands: Brand[]) => {
        this.brands = brands;

        this.disabledReports = !(this.brands.length > 0);
      }
    );

    this._brandCreateService.subject.asObservable().subscribe(
      (brand: Brand) => {
        if (brand) {
          this.brands.push(brand);

          this.disabledReports = !(this.brands.length > 0);
        }
      }
    );
  }
}
