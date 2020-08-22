import { Product } from '../models/Product';

import { ProductsRepossitory } from '../repositories/ProductsRepository';

interface Request {
  name: String;
  price: Number;
}

class CreateProductService {
  private productsRepository: ProductsRepossitory;

  constructor(productRepository: ProductsRepossitory){
    this.productsRepository = productRepository;
  }

  public execute({name, price}: Request): Product {
    const product = this.productsRepository.create({
      name,
      price
    });

    return product;
  }
}

export { CreateProductService }
