import { Apartment, Occupation } from '../models/Apartment';
import Nedb from 'nedb';

interface CreateApartmentDTO {
  name: String;
  maxOccupation: Occupation;
}

class ApartmentsRepository{
  private dbApartments : Nedb<Apartment>;

  constructor(){
    this.dbApartments = new Nedb({
      filename: 'db/apartments.db',
      autoload: true
    })
  }

  public all(){
    return this.dbApartments.getAllData();
  }

  public create({name, maxOccupation}: CreateApartmentDTO): Apartment{
    const apartment = new Apartment({name, maxOccupation});

    this.dbApartments.insert(apartment)

    return apartment;
  }
}

export {ApartmentsRepository}
