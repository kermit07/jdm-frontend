import {User, UserType} from "./user.model";
import {Address} from "./address.model";

export class Client extends User {
  name: string;
  contactEmail: string;
  phone: string;
  photo: string;
  views: number;
  address: Address;

  constructor(id: number, email: string, password: string, name: string, contactEmail: string, phone: string, photo: string, views: number, address: Address) {
    super(id, email, password, UserType.Client);
    this.name = name;
    this.contactEmail = contactEmail;
    this.phone = phone;
    this.photo = photo;
    this.views = views;
    this.address = address;
  }
}
