import { Router } from 'express';

import { ApartmentsRepository } from '../repositories/ApartmentsRepository';
import { CreateApartmentService } from '../services/CreateApartmentService';

const apartmentsRouter = Router();
const apartmentsRepository = new ApartmentsRepository();

apartmentsRouter.get('/', (request, response) => {
  const apartments = apartmentsRepository.all();

  return response.json(apartments);
});

apartmentsRouter.post('/', (request, response) =>{
    try{
      const { name, maxOccupation} = request.body;

      const createApartment = new CreateApartmentService(
        apartmentsRepository
      );

      const apartment = createApartment.execute({
        name,
        maxOccupation,
      });

      return response.json(apartment);
    }catch(err){
      return response.status(400).json({error: "Something is wrong"})
    }
});

export { apartmentsRouter };
