import { uuid  } from 'uuidv4';

interface Occupation{
  numberOfAdults: Number;
  numberOfChildren: Number;
}

class Booking {
  _id: String;

  apartment: String;

  guest: String;

  occupation: Occupation; //Number of people ([{"adults:" xx, "children": xx}])

  price: Number;

  date: Date;

  constructor({ apartment, guest, occupation, price, date}: Omit<Booking, '_id'>){
    this._id = uuid();
    this.apartment = apartment;
    this.guest = guest;
    this.occupation = occupation;
    this.price = price;
    this.date = date;
  }
}

export { Booking }
