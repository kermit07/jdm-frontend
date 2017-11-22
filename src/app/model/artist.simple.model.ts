import {User, UserType} from "./user.model";

export class ArtistSimple extends User {
  name: string;
  surname: string;
  phone: string;

  constructor(email: string, password: string, name: string, surname: string, phone: string) {
    super(0, email, password, UserType.Artist);
    this.name = name;
    this.surname = surname;
    this.phone = phone;
  }
}
