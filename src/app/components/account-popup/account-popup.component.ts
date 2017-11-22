import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Form} from "@angular/forms";
import {AlertService} from "../../services/alert.service";
import {AlertType} from "../../model/alert.model";

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

  accountForm: AccountForm = new AccountForm();

  constructor(public dialogRef: MatDialogRef<AccountPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public alertService: AlertService) {
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  doLogin() {
    this.alertService.alert(AlertType.Success, "Zalogowano!")
  }

  selectFormKind(kind) {
    this.myFormKind = kind;
  }

  selectRegisterKind(kind) {
    this.myRegisterKind = kind;
  }
}

enum FormKind {
  Login = 0,
  Register = 1
}

enum RegisterKind {
  Artist = 0,
  Client = 1
}

export class AccountForm {
  loginForm: LoginForm = new LoginForm()
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
