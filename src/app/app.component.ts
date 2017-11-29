import {Component, OnInit} from '@angular/core';
import {ModalService} from "./services/modal.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private modalSvc: ModalService) {
  }

  ngOnInit() {
  }

  openLoginDialog(type: string) {
    this.modalSvc.open('account-popup');
  }

  logout() {
    this.isLogged = false;
  }
}
