import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AccountPopupComponent} from "./components/account-popup/account-popup.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged: boolean = false;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openLoginDialog(type: string) {
    let dialogRef = this.dialog.open(AccountPopupComponent, {
      height: 'auto',
      width: '600px',
      data: {type: type}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  logout() {
    this.isLogged = false;
  }

}
