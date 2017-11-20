import {Component, Input, OnInit} from '@angular/core';
import {AccountForm, ArtistRegisterForm} from "../account-popup/account-popup.component";

@Component({
  selector: 'app-artist-creator',
  templateUrl: './artist-creator.component.html',
  styleUrls: ['./artist-creator.component.css']
})
export class ArtistCreatorComponent implements OnInit {
  @Input() artist:ArtistRegisterForm;

  constructor() { }

  ngOnInit() {
  }

}
