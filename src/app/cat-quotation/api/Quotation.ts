export class Quotation {
  id: string;
  email: string;
  name: string;
  productName: string;
  message: string;
}

export class QuotationDTO {


  constructor(email: string, name: string, productName: string, message: string) {
    this.email = email;
    this.name = name;
    this.productName = productName;
    this.message = message;
  }

  id: string;
  email: string;
  name: string;
  productName: string;
  message: string;
}
