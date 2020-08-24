import { Booking, Occupation} from '../models/Booking';
import Nedb from 'nedb';


interface CreateBookingDTO {
  apartment: String;
  guest: String;
  occupation: Occupation;
  price: Number;
  date: Date;
}

class BookingsRepository {
  private dbBookings: Nedb<Booking>;

  constructor(){
    this.dbBookings = new Nedb({
      filename: 'db/bookings.db',
      autoload: true
    })
  }

  public all(){
    return this.dbBookings.getAllData();
  }

  public create({apartment, guest, occupation, price, date}:CreateBookingDTO):Booking{
    const booking = new Booking({apartment, guest, occupation, price, date});

    this.dbBookings.insert(booking)

    return booking;
  }
}
export { BookingsRepository }
