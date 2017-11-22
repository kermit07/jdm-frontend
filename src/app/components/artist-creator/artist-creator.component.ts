import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountForm, ArtistRegisterForm} from "../account-popup/account-popup.component";
import {ArtistSimple} from "../../model/artist.simple.model";

@Component({
  selector: 'app-artist-creator',
  templateUrl: './artist-creator.component.html',
  styleUrls: ['./artist-creator.component.css']
})
export class ArtistCreatorComponent implements OnInit {
  @Input() simpleArtist:ArtistSimple;
  @Output() artistCreated = new EventEmitter<ArtistSimple>();
  @Output() loginView = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createArtist() {
    this.artistCreated.emit(this.simpleArtist);
  }

  onLogin() {
    this.loginView.emit();
  }

}
