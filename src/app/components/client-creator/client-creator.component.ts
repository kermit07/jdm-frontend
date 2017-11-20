import {Component, Input, OnInit} from '@angular/core';
import {AccountForm, ClientRegisterForm} from "../account-popup/account-popup.component";

@Component({
  selector: 'app-client-creator',
  templateUrl: './client-creator.component.html',
  styleUrls: ['./client-creator.component.css']
})
export class ClientCreatorComponent implements OnInit {
  @Input() client:ClientRegisterForm;

  constructor() { }

  ngOnInit() {
  }

}
