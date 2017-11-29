import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {AlertType} from "../../model/alert.model";

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

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.alertService.alert(AlertType.Success, "Zalogowano!");
    }, 2000)
    console.log(this.model);
  }

  onRegister() {
    this.registerView.emit();
  }

}
