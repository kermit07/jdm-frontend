import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AccountForm, SimpleAuthForm} from "../account-popup/account-popup.component";

@Component({
  selector: 'app-simple-auth-form',
  templateUrl: './simple-auth-form.component.html',
  styleUrls: ['./simple-auth-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleAuthFormComponent implements OnInit {
  model = {email: "", password: "", rePasword: ""};
  emailValidation = {empty: false, badFormat: false};
  passwordValidation = {empty: false, notEqual: false};

  constructor() {
  }

  ngOnInit() {
  }

  onChange() {

  }

  onEmailChange() { // TODO - do it better
    this.emailValidation = {empty: false, badFormat: false};
    if (this.model.email == "")
      this.emailValidation.empty = true;

    let emailRegExp = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

    if (!emailRegExp.test(this.model.email))
      this.emailValidation.badFormat = true;
  }

  onPasswordChange() { // TODO - do it better
    this.passwordValidation = {empty: false, notEqual: false};
    if (this.model.password == "")
      this.passwordValidation.empty = true;
    if (this.model.password != this.model.rePasword)
      this.passwordValidation.notEqual = true;
  }

  doSth() {
    console.log(this.model)
  }
}
