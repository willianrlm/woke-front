import {Person} from "./person";

export class User{
  id: number;
  login: string;
  password: string
  person: Person

  constructor(id: number, login: string, password: string, person: Person) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.person = person;
  }
}
