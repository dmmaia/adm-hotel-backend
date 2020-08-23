import {Router} from 'express';

import { apartmentsRouter } from './apartments.routes';
import { guestsRouter } from './guests.routes';
import { bookingRouter } from './bookings.routes';
import { productRouter } from './products.routes';
import { spentsRouter } from './spents.routes';

const routes = Router();

routes.use('/apartments', apartmentsRouter);
routes.use('/guests', guestsRouter);
routes.use('/bookings', bookingRouter);
routes.use('/products', productRouter);
routes.use('/spents', spentsRouter);

export {routes};
