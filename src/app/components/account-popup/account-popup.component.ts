import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {ModalService} from "../../services/modal.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-account-popup',
  templateUrl: './account-popup.component.html',
  styleUrls: ['./account-popup.component.css']
})
export class AccountPopupComponent implements OnInit {
  formKind = FormKind;
  myFormKind: FormKind = FormKind.Login;
  registerKind = RegisterKind;
  myRegisterKind: RegisterKind = RegisterKind.Artist;

  @Output() userCreated = new EventEmitter<User>();

  constructor(private modalSvc: ModalService,
              public alertService: AlertService) {
    this.myFormKind = FormKind.Login;
  }

  ngOnInit() {
  }

  onRegisterView() {
    this.myFormKind = FormKind.Register;
  }

  onLoginView() {
    this.myFormKind = FormKind.Login;
  }

  onArtistCreated(data: any) {
    console.log("onArtistCreated: ");
    console.log(data);
  }

  onClientCreated(data: any) {
    console.log("onClientCreated: ");
    console.log(data);
  }

  selectRegisterKind(kind) {
    this.myRegisterKind = kind;
  }

  cancel(id: string) {
    this.modalSvc.cancel(id);
  }
}

enum FormKind {
  Login,
  Register
}

enum RegisterKind {
  Artist,
  Client
}

export class AccountForm {
  loginForm: LoginForm = new LoginForm();
  registerFrom: RegisterForm = new RegisterForm();
}

class LoginForm {
  email: string = "";
}

class RegisterForm {
  artist: ArtistRegisterForm = new ArtistRegisterForm();
  client: ClientRegisterForm = new ClientRegisterForm();
}

export class SimpleAuthForm {
  email: string;
}

export class ArtistRegisterForm extends SimpleAuthForm {
  name: string = "";
  surname: string = "";

  constructor() {
    super();
  }
}

export class ClientRegisterForm extends SimpleAuthForm {
  name: string = "";

  constructor() {
    super();
  }
}
