import {Router} from 'express';

import { apartmentsRouter } from './apartments.routes';
import { guestsRouter } from './guests.routes';

const routes = Router();

routes.use('/apartments', apartmentsRouter);
routes.use('/guests', guestsRouter);

export {routes};
