import { Apartment, Occupation } from '../models/Apartment';

import { ApartmentsRepository } from '../repositories/ApartmentsRepository';

interface Request {
  name: String;
  maxOccupation: Occupation;
}

class CreateApartmentService {
  private apartmentsRepository: ApartmentsRepository;

  constructor(apartmentsRepository: ApartmentsRepository){
    this.apartmentsRepository = apartmentsRepository;
  }

  public execute({name, maxOccupation}: Request): Apartment {
    const apartment = this.apartmentsRepository.create({
      name,
      maxOccupation
    });

    return apartment;
  }
}

export { CreateApartmentService }
