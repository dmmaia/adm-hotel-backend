import { Apartment } from '../models/Apartment';

interface CreateApartmentDTO {
  name: String;
  maxOccupation: Number;
}

class ApartmentsRepository{
  private apartments: Apartment[];

  constructor(){
    this.apartments = [];
  }

  public all(): Apartment[]{
    return this.apartments;
  }

  public create({name, maxOccupation}: CreateApartmentDTO): Apartment{
    const apartment = new Apartment({name, maxOccupation});

    this.apartments.push(apartment);

    return apartment;
  }
}

export {ApartmentsRepository}
