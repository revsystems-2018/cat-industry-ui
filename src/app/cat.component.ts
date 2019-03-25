import {Component} from '@angular/core';
import {LoadDummyEmployeesService} from './load-dummy-employees.service';

@Component({
  selector: 'cat-root',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent {

  constructor(private _loadDummyEmployeesService: LoadDummyEmployeesService) {

  }
}
