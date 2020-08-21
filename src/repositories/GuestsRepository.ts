import { Guest } from '../models/Guest';

interface CreateGuestDTO {
  name: String;
  cpf: Number;
  email: String;
}

class GuestsRepository{
  private guests: Guest[];

  constructor(){
    this.guests = [];
  }

  public all(): Guest[]{
    return this.guests;
  }

  public create({name, cpf, email}: CreateGuestDTO): Guest{
    const guest = new Guest({name, cpf, email});

    this.guests.push(guest);

    return guest;
  }
}

export { GuestsRepository }
