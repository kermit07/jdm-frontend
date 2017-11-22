import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  @Output() registerView = new EventEmitter();

  constructor(
    private alertService: AlertService) { }

  ngOnInit() {}

  login() {
    this.loading = true;
    console.log(this.model);
  }

  onRegister() {
    this.registerView.emit();
  }

}
