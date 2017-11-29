import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class ModalService {
  private openModal = new Subject<ModalType>();
  private hModals: any = {};

  add(modal: any) {
    let id = modal.id;
    if (!id) {
      throw "add(): Attempt to add a modal without an id";
    }
    this.hModals[id] = modal;
  }

  remove(id: string) {
    delete this.hModals[id];
  }

  open(id: string, modalType?: ModalType) {
    let modal = this.hModals[id];
    if (!modal) {
      throw `open(): There is no modal with id '${id}'`;
    }
    modal.open();
    this.openModal.next(modalType);
  }

  cancel(id: string) {
    let modal = this.hModals[id];
    if (!modal) {
      throw `cancel(): There is no modal with id '${id}'`;
    }
    modal.close();
  }

  getObserval() {
    return this.openModal.asObservable();
  }
}

export enum ModalType {
  Login,
  ArtistRegister,
  ClientRegister
}
