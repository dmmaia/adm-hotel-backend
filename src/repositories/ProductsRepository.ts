import { Product } from '../models/Product';

interface CreateProductDTO {
  name: String;
  price: Number;
}

class ProductsRepossitory {
  private products: Product[];

  constructor(){
    this.products = [];
  }

  public all(): Product[]{
    return this.products;
  }

  public create({name, price}: CreateProductDTO): Product{
    const product = new Product({name, price});

    this.products.push(product);

    return product;
  }
}

export { ProductsRepossitory }
