import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClientSimple} from "../../model/client.simple.model";

@Component({
  selector: 'app-client-creator',
  templateUrl: './client-creator.component.html',
  styleUrls: ['./client-creator.component.css']
})
export class ClientCreatorComponent implements OnInit {
  simpleClient: ClientSimple;
  authValid = false;
  @Output() clientCreated = new EventEmitter<ClientSimple>();
  @Output() loginView = new EventEmitter();

  constructor() {
    this.simpleClient = new ClientSimple("", "", "", "", "");
  }

  ngOnInit() {
  }

  loginData(data: { email: string, password: string }) {
    console.log(data)
  }

  onFormCorrect(isValid: boolean) {
    this.authValid = isValid;
  }

  createArtist() {
    this.clientCreated.emit(this.simpleClient);
  }

  backToLogin() {
    this.loginView.emit();
  }

}
