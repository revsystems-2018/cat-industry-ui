export class Brand {
  id: string;
  code: string;
  name: string;
  description: string;
}

export class BrandDTO {


  constructor(code: string, name: string, description: string) {
    this.code = code;
    this.name = name;
    this.description = description;
  }

  id: string;
  code: string;
  name: string;
  description: string;
}
