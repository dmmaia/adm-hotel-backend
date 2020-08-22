import { Booking, Occupation} from '../models/Booking';

import { BookingsRepository } from '../repositories/BookingsRepository';

interface Request {
  apartment: String;
  guest: String;
  occupation: Occupation;
  price: Number;
  date: Date;
}

class CreateBookingService {
  private bookingsRepository: BookingsRepository;

  constructor(bookingRepository: BookingsRepository){
    this.bookingsRepository = bookingRepository;
  }

  public execute({apartment, guest, occupation, price, date}: Request): Booking{
    const booking = this.bookingsRepository.create({
      apartment,
      guest,
      occupation,
      price,
      date
    });

    return booking;
  }
}

export { CreateBookingService }
