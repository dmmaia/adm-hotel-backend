import { Spent } from '../models/Spent';

interface CreateProductDTO {
  product: String;
  booking: String;
  quantity: Number;
}

class SpentsRepository {
  private spents: Spent[];

  constructor(){
    this.spents = [];
  }

  public all(): Spent[]{
    return this.spents;
  }

  public create({product, booking, quantity}: CreateProductDTO): Spent{
    const spent = new Spent({product, booking, quantity});

    this.spents.push(spent);

    return spent;
  }
}

export { SpentsRepository }
