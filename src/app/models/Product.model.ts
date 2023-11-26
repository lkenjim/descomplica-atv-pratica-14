export class Product {
  private constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number
  ) {}

  static create(name: string, description: string, price: number): Product {
    return new this(window.crypto.randomUUID(), name, description, price);
  }
}
