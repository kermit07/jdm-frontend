export class User {
  id: number = -1;
  email: string = "";
  type: UserType = UserType.None;

  constructor(id: number, email: string, type: UserType) {
    this.id = id;
    this.email = email;
    this.type = type;
  }
}

export enum UserType {
  None,
  Artist,
  Client
}
