import { Router } from 'express';

import { ProductsRepossitory } from '../repositories/ProductsRepository';
import { CreateProductService } from '../services/CreateProductService';

const productRouter = Router();

const productsRepository = new ProductsRepossitory();

productRouter.get('/', (request, response) => {
  const products = productsRepository.all();

  return response.json(products);
});

productRouter.post('/', (request, response) => {
  try{
    const {name, price} = request.body;

    const createProduct = new CreateProductService(
      productsRepository
    );

    const product = createProduct.execute({
      name,
      price
    });

    return response.json(product);
  }catch(err){
    return response.status(400).json({error: "Something was wrong"});
  }
});

export { productRouter };
