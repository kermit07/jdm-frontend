import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-grid',
  templateUrl: './offer-grid.component.html',
  styleUrls: ['./offer-grid.component.css']
})
export class OfferGridComponent implements OnInit {
  offers:string[] = [];

  constructor() { }

  ngOnInit() {
    this.offers.push("oferta numer jeden");
    this.offers.push("oferta numer dwa");
    this.offers.push("oferta numer trzy");
    this.offers.push("oferta numer cztery");
    this.offers.push("oferta numer pięć");
    this.offers.push("oferta numer sześć");
    this.offers.push("oferta numer siedem");
    this.offers.push("oferta numer osiem");
    this.offers.push("oferta numer dziewięć");
  }

}
