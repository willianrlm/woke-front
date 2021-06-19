import {User} from "./user";
import {Contact} from "./contact";

export class Person {
  id: number
  name: string
  birthday: string
  users: User[]
  contacts: Contact[]

  constructor(id: number, name: string, birthday: string, users: User[], contacts: Contact[]) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.users = users;
    this.contacts = contacts;
  }
}
