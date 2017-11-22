import {Component, OnInit} from '@angular/core';
import {AccountPopupComponent, ClientRegisterForm} from "../account-popup/account-popup.component";
import {MatDialog} from "@angular/material";
import {ClientSimple} from "../../model/client.simple.model";

@Component({
  selector: 'app-offer-creator',
  templateUrl: './offer-creator.component.html',
  styleUrls: ['./offer-creator.component.css']
})
export class OfferCreatorComponent implements OnInit {
  step: number;
  simpleClient: ClientSimple;

  constructor(public dialog: MatDialog) {
    this.step = 1;
    this.simpleClient = new ClientSimple("", "", "", "", "");
  }

  ngOnInit() {
  }

  onLoginView() {
    let dialogRef = this.dialog.open(AccountPopupComponent, {
      height: 'auto',
      width: '600px',
      data: {type: "login"}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onClientCreated(data: string) {
    console.log("onClientCreated: ");
    console.log(data);
  }

  nextStep() {
    console.log(this.simpleClient)
    this.step++;
  }

  prevStep() {
    console.log("prevStep ?")
    this.step--;
  }

}
