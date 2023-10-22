import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeasderComponent } from './heasder.component';

describe('HeasderComponent', () => {
  let component: HeasderComponent;
  let fixture: ComponentFixture<HeasderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeasderComponent]
    });
    fixture = TestBed.createComponent(HeasderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
