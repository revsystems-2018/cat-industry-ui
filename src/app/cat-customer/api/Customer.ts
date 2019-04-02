export class Customer {
  id: string;
  ci: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: number;
  email: string;
}

export class CustomerDTO {

  constructor(ci: string, firstName: string, lastName: string, address: string, phone: number, email: string) {
    this.ci = ci;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  id: string;
  ci: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: number;
  email: string;
}
