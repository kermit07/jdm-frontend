import {Injectable} from '@angular/core';

@Injectable()
export class ModalService {

  private hModals: any = {};

  add(modal: any) {

    let id = modal.id;
    if (! id) {
      throw "add(): Attempt to add a modal without an id";
    }
    this.hModals[id] = modal;
  }

  remove(id: string) {
    delete this.hModals[id];
  }

  open(id: string, data ?: any) {
    let modal = this.hModals[id];
    if (!modal) {
      throw `open(): There is no modal with id '${id}'`;
    }
    modal.open(data);
  }

  cancel(id: string) {
    let modal = this.hModals[id];
    if (!modal) {
      throw `cancel(): There is no modal with id '${id}'`;
    }
    modal.close();
  }
}
