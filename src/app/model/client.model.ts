import {User, UserType} from "./user.model";
import {Address} from "./address.model";

export class Client extends User {
  name: string;
  email: string;
  phone: string;
  photo: string;
  views: number;
  address: Address;

  constructor(id: number, email: string, name: string, clientEmail: string, phone: string, photo: string, views: number, address: Address) {
    super(id, email, UserType.Client);
    this.name = name;
    this.email = clientEmail;
    this.phone = phone;
    this.photo = photo;
    this.views = views;
    this.address = address;
  }
}
