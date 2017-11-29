import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {AlertType} from "../../model/alert.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountLoginComponent implements OnInit {
  loading = false;
  @Output() registerView = new EventEmitter();

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    setTimeout(() => {
      this.loading = false;
      this.alertService.alert(AlertType.Success, "Zalogowano!");
    }, 2000)
    console.log(email);
    console.log(password);
  }

  backToRegister() {
    this.registerView.emit();
  }

}
