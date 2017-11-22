import {User, UserType} from "./user.model";
import {Address} from "./address.model";

export class Artist extends User {
  name: string;
  surname: string;
  phone: string;
  dateOfBirth: string;
  photo: string;
  views: number;
  address: Address;


  constructor(id: number, email: string, name: string, surname: string, phone: string, dateOfBirth: string, photo: string, views: number, address: Address) {
    super(id, email, UserType.Artist);
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.photo = photo;
    this.views = views;
    this.address = address;
  }
}
