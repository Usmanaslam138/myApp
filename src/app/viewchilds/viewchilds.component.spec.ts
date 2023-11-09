import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildsComponent } from './viewchilds.component';

describe('ViewchildsComponent', () => {
  let component: ViewchildsComponent;
  let fixture: ComponentFixture<ViewchildsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewchildsComponent]
    });
    fixture = TestBed.createComponent(ViewchildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
