import {Catalog} from './Catalog';
import {Brand} from '../../../cat-brand/api/brand';

export class Product {
  id: string;
  name: string;
  description: string;
  catalog: Catalog;
  brand: Brand;
  stock: number;
  price: number;
  image: any;
}

export class ProductDTO {

  constructor(name: string,
              description: string,
              catalogId: string,
              brandId: string,
              stock: number,
              price: number) {
    this.name = name;
    this.description = description;
    this.catalogId = catalogId;
    this.brandId = brandId;
    this.stock = stock;
    this.price = price;
  }

  id: string;
  name: string;
  description: string;
  catalogId: string;
  brandId: string;
  stock: number;
  price: number;
}
