import { Router, request } from 'express';

import { SpentsRepository } from '../repositories/SpentsRepository';
import { CreateSpentService } from '../services/CreateSpentService';

const spentsRouter = Router();
const spentsRepository = new SpentsRepository();

spentsRouter.get('/', (request, response) => {
  const spents = spentsRepository.all();

  return response.json(spents);
});

spentsRouter.post('/', (request, response) =>{
  try{
    const { product, booking, quantity} = request.body;

    const createSpent = new CreateSpentService(
      spentsRepository
    );

    const spent = createSpent.execute({
      product,
      booking,
      quantity
    });

    return response.json(spent);
  }catch(err){
    return response.status(400).json({error: "Something was wrong"})
  }
});

export { spentsRouter }
