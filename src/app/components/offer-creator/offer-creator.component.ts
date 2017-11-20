import {Component, OnInit} from '@angular/core';
import {AccountPopupComponent, ClientRegisterForm} from "../account-popup/account-popup.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-offer-creator',
  templateUrl: './offer-creator.component.html',
  styleUrls: ['./offer-creator.component.css']
})
export class OfferCreatorComponent implements OnInit {
  step: number;
  client: ClientRegisterForm;

  constructor(public dialog: MatDialog) {
    this.step = 1;
    this.client = new ClientRegisterForm();
  }

  ngOnInit() {
  }

  openLoginDialog(type: string) {
    let dialogRef = this.dialog.open(AccountPopupComponent, {
      height: '400px',
      width: '600px',
      data: {type: type}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  nextStep() {
    console.log(this.client)
    this.step++;
  }

  prevStep() {
    console.log("prevStep ?")
    this.step--;
  }

}
