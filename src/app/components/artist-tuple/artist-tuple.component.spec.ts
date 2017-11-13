import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTupleComponent } from './artist-tuple.component';

describe('ArtistTupleComponent', () => {
  let component: ArtistTupleComponent;
  let fixture: ComponentFixture<ArtistTupleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistTupleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
