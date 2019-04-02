/**
 * @author alain quinones
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Catalog, CatalogDTO} from '../api/domain/Catalog';

@Injectable()
export class CatalogsHttpService extends BaseHttpService<Catalog, CatalogDTO> {

  protected path(): string {
    return '/catalogs';
  }
}
