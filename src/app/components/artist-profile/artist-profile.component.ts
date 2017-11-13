import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {

  id = 0;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

}
