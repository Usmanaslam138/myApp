import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasshoesComponent } from './adidasshoes.component';

describe('AdidasshoesComponent', () => {
  let component: AdidasshoesComponent;
  let fixture: ComponentFixture<AdidasshoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdidasshoesComponent]
    });
    fixture = TestBed.createComponent(AdidasshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
