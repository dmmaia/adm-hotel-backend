import { Router} from 'express';

import { GuestsRepository } from '../repositories/GuestsRepository';
import { CreateGuestService } from '../services/CreateGuestService';

const guestsRouter = Router();
const guestsRepository = new GuestsRepository();

guestsRouter.get('/', (request, response) => {
  const guests = guestsRepository.all();

  return response.json(guests);
});

guestsRouter.post('/', (request, response) => {
  try{
    const {name, cpf, email} = request.body;

    const createGuest = new CreateGuestService(
      guestsRepository
    );

    const guest = createGuest.execute({
      name,
      cpf,
      email
    });

    return response.json(guest);
  }catch(err){
    return response.status(400).json({error: "Something is wrong"});
  }
});

export { guestsRouter };
