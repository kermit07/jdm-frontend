import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountForm, ClientRegisterForm} from "../account-popup/account-popup.component";
import {ClientSimple} from "../../model/client.simple.model";

@Component({
  selector: 'app-client-creator',
  templateUrl: './client-creator.component.html',
  styleUrls: ['./client-creator.component.css']
})
export class ClientCreatorComponent implements OnInit {
  @Input() simpleClient:ClientSimple;
  @Output() clientCreated = new EventEmitter<ClientSimple>();
  @Output() loginView = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createClient() {
    this.clientCreated.emit(this.simpleClient);
  }

  onLogin() {
    this.loginView.emit();
  }

}
