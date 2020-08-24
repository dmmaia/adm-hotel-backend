import { uuid } from "uuidv4";

class Product {
  _id: String;

  name:  String;

  price: Number;

  constructor({name, price}: Omit<Product, '_id'>){
    this._id = uuid();
    this.name = name;
    this.price = price;
  }
}

export { Product };
