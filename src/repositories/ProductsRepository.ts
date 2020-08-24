import { Product } from '../models/Product';
import Nedb from 'nedb';

interface CreateProductDTO {
  name: String;
  price: Number;
}

class ProductsRepossitory {
  private dbProducts: Nedb<Product>;

  constructor(){
    this.dbProducts = new Nedb({
      filename: 'db/products.db',
      autoload: true
    })
  }

  public all(){
    return this.dbProducts.getAllData();
  }

  public create({name, price}: CreateProductDTO): Product{
    const product = new Product({name, price});

    this.dbProducts.insert(product);

    return product;
  }
}

export { ProductsRepossitory }
