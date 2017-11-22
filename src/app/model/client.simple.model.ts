import {User, UserType} from "./user.model";
import {Address} from "./address.model";

export class ClientSimple extends User {
  name: string;
  contactEmail: string;
  phone: string;

  constructor(email: string, password: string, name: string, contactEmail: string, phone: string) {
    super(0, email, password, UserType.Client);
    this.name = name;
    this.contactEmail = contactEmail;
    this.phone = phone;
  }
}
