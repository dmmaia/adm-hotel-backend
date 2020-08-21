class Product {
  name:  String;

  price: Number;

  constructor({name, price}: Product){
    this.name = name;

    this.price = price;
  }
}

export { Product };
