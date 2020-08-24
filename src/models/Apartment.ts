import { uuid } from "uuidv4";

interface Occupation{
  numberOfAdults: Number;
  numberOfChildren: Number;
}

class Apartment{
  _id: String;

  name: String;

  maxOccupation: Occupation;

  constructor({name, maxOccupation}: Omit<Apartment, '_id'>){
    this._id = uuid();
    this.name = name;
    this.maxOccupation = maxOccupation;
  }
}

export { Apartment, Occupation };
