import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AccountForm, SimpleAuthForm} from "../account-popup/account-popup.component";

@Component({
  selector: 'app-simple-auth-form',
  templateUrl: './simple-auth-form.component.html',
  styleUrls: ['./simple-auth-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleAuthFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
