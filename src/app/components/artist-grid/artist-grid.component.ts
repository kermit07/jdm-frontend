import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-grid',
  templateUrl: './artist-grid.component.html',
  styleUrls: ['./artist-grid.component.css']
})
export class ArtistGridComponent implements OnInit {
  artists:string[] = [];

  constructor() { }

  ngOnInit() {
    this.artists.push("artysta numer jeden");
    this.artists.push("artysta numer dwa");
    this.artists.push("artysta numer trzy");
    this.artists.push("artysta numer cztery");
    this.artists.push("artysta numer pięć");
    this.artists.push("artysta numer sześć");
    this.artists.push("artysta numer siedem");
    this.artists.push("artysta numer osiem");
    this.artists.push("artysta numer dziewięć");
  }

}
