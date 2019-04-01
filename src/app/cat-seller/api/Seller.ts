import {Product} from '../../cat-product/api/domain/Product';
import {Customer} from '../../cat-customer/api/Customer';

export class Seller {
  id: string;
  quantity: number;
  description: string;
  totalSell: number;
  product: Product;
  customer: Customer;
}

export class SellerDTO {

  constructor(quantity: number, price: number, description: string, productId: string, customerId: string) {
    this.quantity = quantity;
    this.price = price;
    this.description = description;
    this.productId = productId;
    this.customerId = customerId;
  }

  id: string;
  quantity: number;
  price: number;
  description: string;
  productId: string;
  customerId: string;
}
