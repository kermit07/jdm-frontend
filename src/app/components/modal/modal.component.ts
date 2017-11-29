import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() width: number;

  elem: any;    // the <app-modal> element
  body: any;

  constructor(private modalSvc: ModalService,
              private element: ElementRef) {

    this.elem = this.element.nativeElement;
  }


  ngOnInit(): void {

    if (!this.id) {
      throw 'modal must have an id';
    }

    this.body = document.getElementsByTagName('body')[0];
    this.body.appendChild(this.elem);

    this.modalSvc.add(this);
  }

  ngOnDestroy(): void {

    this.modalSvc.remove(this.id);
    this.elem.remove();
  }

  getStyles(): Object {
    if (this.width) {
      return {
        'width': this.width.toString() + 'px',
        'margin-left': 'auto',
        'margin-right': 'auto'
      };
    }
    return {};
  }

  open(hData ?: any): void {
    if (!hData) {
      hData = {};
    }

    this.body.classList.add('modal-open');
    this.elem.style.display = 'block';
  }


  close(): void {
    this.elem.style.display = 'none';
    this.body.classList.remove('modal-open');

    return null;
  }
}
