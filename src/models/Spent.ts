import { uuid } from 'uuidv4';

class Spent{
  _id: String;

  product: String;

  booking: String;

  quantity: Number;

  constructor({product, booking, quantity}: Omit<Spent, '_id'>){
    this._id = uuid();
    this.product = product;
    this.booking = booking;
    this.quantity = quantity;
  }
}

export { Spent }
