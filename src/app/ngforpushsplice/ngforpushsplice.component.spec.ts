import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforpushspliceComponent } from './ngforpushsplice.component';

describe('NgforpushspliceComponent', () => {
  let component: NgforpushspliceComponent;
  let fixture: ComponentFixture<NgforpushspliceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgforpushspliceComponent]
    });
    fixture = TestBed.createComponent(NgforpushspliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
