import { Booking, Occupation} from '../models/Booking';


interface CreateBookingDTO {
  apartment: String;
  guest: String;
  occupation: Occupation;
  price: Number;
  date: Date;
}

class BookingsRepository {
  private bookings: Booking[];

  constructor(){
    this.bookings = [];
  }

  public all(): Booking[]{
    return this.bookings;
  }

  public create({apartment, guest, occupation, price, date}:CreateBookingDTO):Booking{
    const booking = new Booking({apartment, guest, occupation, price, date});

    this.bookings.push(booking);

    return booking;
  }
}
export { BookingsRepository }
