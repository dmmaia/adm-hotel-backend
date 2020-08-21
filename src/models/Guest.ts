import { uuid } from 'uuidv4';

class Guest {
  _id : String;

  name: String;

  cpf: Number;

  email: String;

  constructor({name, cpf, email}: Omit<Guest, '_id'>){
    this._id = uuid();
    this.name = name;
    this.cpf = cpf;
    this.email = email;
  }
}

export { Guest }
