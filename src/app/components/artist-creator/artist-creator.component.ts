import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArtistSimple} from "../../model/artist.simple.model";

@Component({
  selector: 'app-artist-creator',
  templateUrl: './artist-creator.component.html',
  styleUrls: ['./artist-creator.component.css']
})
export class ArtistCreatorComponent implements OnInit {
  simpleArtist: ArtistSimple;
  authValid = false;
  @Output() artistCreated = new EventEmitter<ArtistSimple>();
  @Output() loginView = new EventEmitter();

  constructor() {
    this.simpleArtist = new ArtistSimple("", "", "", "", "");
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
    this.artistCreated.emit(this.simpleArtist);
  }

  backToLogin() {
    this.loginView.emit();
  }

}
