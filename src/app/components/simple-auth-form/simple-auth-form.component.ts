import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-simple-auth-form',
  templateUrl: './simple-auth-form.component.html',
  styleUrls: ['./simple-auth-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleAuthFormComponent implements OnInit, AfterViewInit {
  @ViewChild('f') authForm: NgForm;
  @Output() isFormCorrect = new EventEmitter<boolean>();
  @Output() userEmmiter = new EventEmitter<{ email: string, password: string }>();
  formChangesSubscribtion: Subscription;

  constructor() {
  }

  ngAfterViewInit() {
    this.formChangesSubscribtion = this.authForm.control.valueChanges
      .subscribe(() => this.modelChange());
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.formChangesSubscribtion.unsubscribe();
  }

  modelChange() { // TODO - custom validators
    let isFormCorrect = this.authForm.valid && this.authForm.value.password === this.authForm.value.repassword;
    this.isFormCorrect.emit(isFormCorrect);
    if (isFormCorrect)
      this.userEmmiter.emit({email: this.authForm.value.email, password: this.authForm.value.password});
  }
}
