import { Spent } from '../models/Spent';
import { SpentsRepository } from '../repositories/SpentsRepository';

interface Request {
  product: String;
  booking: String;
  quantity: Number;
}

class CreateSpentService {
  private spentsRepository: SpentsRepository;

  constructor(spentsRepository: SpentsRepository){
    this.spentsRepository = spentsRepository;
  }

  public execute({product, booking, quantity}: Request): Spent {
    const spent = this.spentsRepository.create({
      product,
      booking,
      quantity
    });

    return spent;
  }
}

export { CreateSpentService }
