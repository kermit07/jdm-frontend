import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAuthFormComponent } from './simple-auth-form.component';

describe('SimpleAuthFormComponent', () => {
  let component: SimpleAuthFormComponent;
  let fixture: ComponentFixture<SimpleAuthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAuthFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
