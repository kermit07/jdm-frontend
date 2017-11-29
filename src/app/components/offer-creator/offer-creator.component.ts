import {Component, OnInit} from '@angular/core';
import {ModalService, ModalType} from "../../services/modal.service";

@Component({
  selector: 'app-offer-creator',
  templateUrl: './offer-creator.component.html',
  styleUrls: ['./offer-creator.component.css']
})
export class OfferCreatorComponent implements OnInit {
  step = 1;

  constructor(private modalSvc: ModalService) {
  }

  ngOnInit() {
  }

  onLoginView() {
    this.modalSvc.open('account-popup', ModalType.Login);
  }

  onClientCreated(data: string) {
    console.log("onClientCreated: ");
    console.log(data);
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    console.log("prevStep ?")
    this.step--;
  }
}
