import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AlertService} from "../../services/alert.service";
import {AlertType} from "../../model/alert.model";
import {ArtistSimple} from "../../model/artist.simple.model";
import {ClientSimple} from "../../model/client.simple.model";

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

  simpleArtist: ArtistSimple;
  simpleClient: ClientSimple;

  constructor(public dialogRef: MatDialogRef<AccountPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public alertService: AlertService) {
    this.simpleArtist = new ArtistSimple("", "", "", "", "");
    this.simpleClient = new ClientSimple("", "", "", "", "");
    this.myFormKind = FormKind.Login;
    if (data.type == "client") {
      this.myFormKind = FormKind.Register;
      this.myRegisterKind = RegisterKind.Client;
    } else if (data.type == "artist") {
      this.myFormKind = FormKind.Register;
      this.myRegisterKind = RegisterKind.Artist;
    }
  }

  ngOnInit() {
  }

  onRegisterView() {
    this.myFormKind = FormKind.Register;
  }

  onLoginView() {
    this.myFormKind = FormKind.Login;
  }

  onArtistCreated(data: string) {
    console.log("onArtistCreated: ");
    console.log(data);
  }

  onClientCreated(data: string) {
    console.log("onClientCreated: ");
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  doLogin() {
    this.alertService.alert(AlertType.Success, "Zalogowano!")
  }

  selectRegisterKind(kind) {
    this.myRegisterKind = kind;
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
