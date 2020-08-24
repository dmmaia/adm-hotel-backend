import { Spent } from '../models/Spent';
import Nedb from 'nedb';

interface CreateProductDTO {
  product: String;
  booking: String;
  quantity: Number;
}

class SpentsRepository {
  private dbSpents: Nedb<Spent>;

  constructor(){
    this.dbSpents = new Nedb({
      filename: 'db/spents.db',
      autoload: true
    })
  }

  public all(){
    return this.dbSpents.getAllData();
  }

  public create({product, booking, quantity}: CreateProductDTO): Spent{
    const spent = new Spent({product, booking, quantity});

    this.dbSpents.insert(spent);

    return spent;
  }
}

export { SpentsRepository }
