import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ModalService, ModalType} from "../../services/modal.service";
import {User} from "../../model/user.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-account-popup',
  templateUrl: './account-popup.component.html',
  styleUrls: ['./account-popup.component.css']
})
export class AccountPopupComponent implements OnInit, OnDestroy {
  private id = "account-popup";
  formKind = FormKind;
  myFormKind: FormKind;
  registerKind = RegisterKind;
  myRegisterKind: RegisterKind;
  modalSubsribtion: Subscription;
  @Output() userCreated = new EventEmitter<User>();

  constructor(private modalSvc: ModalService) {
  }

  ngOnInit() {
    this.modalSubsribtion = this.modalSvc.getObserval().subscribe((modalType: ModalType) => {
      if (modalType === ModalType.Login) {
        this.myFormKind = FormKind.Login;
      } else if (modalType === ModalType.ArtistRegister) {
        this.myFormKind = FormKind.Register;
        this.myRegisterKind = RegisterKind.Artist;
      } else if (modalType === ModalType.ClientRegister) {
        this.myFormKind = FormKind.Register;
        this.myRegisterKind = RegisterKind.Client;
      } else {
        this.myFormKind = FormKind.Login;
      }
    });
  }

  ngOnDestroy() {
    this.modalSubsribtion.unsubscribe();
  }

  onRegisterView() {
    this.myFormKind = FormKind.Register;
    this.myRegisterKind = RegisterKind.Artist;
  }

  onLoginView() {
    this.myFormKind = FormKind.Login;
  }

  selectRegisterKind(kind) {
    this.myRegisterKind = kind;
  }

  onArtistCreated(data: any) {
    console.log("onArtistCreated: ");
    console.log(data);
  }

  onClientCreated(data: any) {
    console.log("onClientCreated: ");
    console.log(data);
  }

  cancel() {
    this.modalSvc.cancel(this.id);
  }
}

enum FormKind {
  Login,
  Register
}

enum RegisterKind {
  Artist,
  Client
}
