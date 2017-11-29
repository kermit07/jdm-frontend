import {Component, OnInit} from '@angular/core';
import {ModalService, ModalType} from "./services/modal.service";


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

  openArtistRegisterDialog() {
    this.modalSvc.open('account-popup', ModalType.ArtistRegister);
  }

  openClientRegisterDialog() {
    this.modalSvc.open('account-popup', ModalType.ClientRegister);
  }

  openLoginDialog() {
    this.modalSvc.open('account-popup', ModalType.Login);
  }

  logout() {
    this.isLogged = false;
  }
}
