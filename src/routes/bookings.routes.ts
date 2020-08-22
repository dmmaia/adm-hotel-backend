import { Router } from 'express';

import { BookingsRepository } from '../repositories/BookingsRepository';
import { CreateBookingService } from '../services/CreateBookingService';

const bookingRouter = Router();
const bookingRepository = new BookingsRepository();

bookingRouter.get('/', (request, response) => {
  const bookings = bookingRepository.all();

  return response.json(bookings);
});

bookingRouter.post('/', (request, response) => {
  try{
    const { apartment, guest, occupation, price, date} = request.body;

    const createBooking = new CreateBookingService(
      bookingRepository
    );

    const booking = createBooking.execute({
      apartment,
      guest,
      occupation,
      price,
      date
    });

    return response.json(booking);
  }catch(err){
    return response.status(400).json({message: "Something was wrong"})
  }
});

export { bookingRouter };
