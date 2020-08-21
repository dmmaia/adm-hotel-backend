import { Guest } from '../models/Guest';

import { GuestsRepository } from '../repositories/GuestsRepository';

interface Request {
  name: String;
  cpf: Number;
  email: String;
}

class CreateGuestService {
  private guestsRepository : GuestsRepository;

  constructor(guestsRepository: GuestsRepository){
    this.guestsRepository = guestsRepository;
  }

  public execute({name,  cpf, email}: Request): Guest {
    const guest = this.guestsRepository.create({
      name,
      cpf,
      email
    });

    return guest;
  }
}

export { CreateGuestService }
