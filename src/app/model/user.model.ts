export class User {
  id: number = -1;
  email: string = "";
  password: string = "";
  type: UserType = UserType.None;

  constructor(id: number, email: string, password: string, type: UserType) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.type = type;
  }
}

export enum UserType {
  None,
  Artist,
  Client
}
