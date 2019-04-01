export class Customer {
  id: string;
  ci: string;
  firtsname: string;
  lastName: string;
  address: string;
  phone: number;
  email: string;
}

export class CustomerDTO {

  constructor(ci: string, firtsname: string, lastName: string, address: string, phone: number, email: string) {
    this.ci = ci;
    this.firtsname = firtsname;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  id: string;
  ci: string;
  firtsname: string;
  lastName: string;
  address: string;
  phone: number;
  email: string;
}
