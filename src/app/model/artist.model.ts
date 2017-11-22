export class Artist {
  public name: string;
  public surname: string;
  public email: string;
  public phone: string;
  public views: number;
  public dateOfBirth: string;
  public photo: string;

  constructor(name: string, surname: string, email: string, phone: string, views: number, dateOfBirth: string, photo: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.views = views;
    this.dateOfBirth = dateOfBirth;
    this.photo = photo;
  }
}
