import { Guest } from '../models/Guest';
import Nedb from 'nedb';

interface CreateGuestDTO {
  name: String;
  cpf: Number;
  email: String;
}

class GuestsRepository{
  private dbGuests: Nedb<Guest>;

  constructor(){
    this.dbGuests = new Nedb({
      filename: 'db/guests.db',
      autoload: true
    })
  }

  public all(){
    return this.dbGuests.getAllData();
  }

  public create({name, cpf, email}: CreateGuestDTO): Guest{
    const guest = new Guest({name, cpf, email});

    this.dbGuests.insert(guest);

    return guest;
  }
}

export { GuestsRepository }
