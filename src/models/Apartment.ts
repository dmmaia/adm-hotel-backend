interface Occupation{
  numberOfAdults: Number;
  numberOfChildren: Number;
}

class Apartment{
  name: String;

  maxOccupation: Occupation;

  constructor({name, maxOccupation}: Apartment){
    this.name = name;
    this.maxOccupation = maxOccupation;
  }
}

export { Apartment, Occupation };
