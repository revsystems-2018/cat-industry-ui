/**
 * @author alain quinones
 */

import {Component} from '@angular/core';
import {ProductReportService} from '../../services/product-report.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cat-product-reports',
  templateUrl: './product-reports.component.html',
  styleUrls: ['./product-reports.component.scss']
})
export class ProductReportsComponent {

  public readonly formats = [
    'pdf',
    'png',
    'csv',
    'txt',
    'xls',
    'xlsx',
    'doc',
    'docx',
    'json',
    'xml'
  ];

  public selectedFormat: string;

  constructor(private _productReportService: ProductReportService,
              public modal: NgbActiveModal) {
    this.selectedFormat = this.formats[0];
  }

  public generateReport(): void {
    if (this.selectedFormat) {
      this._productReportService.subject.next(this.selectedFormat);
      this.modal.dismiss('generate click');
    }
  }
}
