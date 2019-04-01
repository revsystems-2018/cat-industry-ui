export class Catalog {
  id: string;
  name: string;
  description: string;
}

export class CatalogDTO {


  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  id: string;
  name: string;
  description: string;
}
