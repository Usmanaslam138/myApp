import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyproductsComponent } from './buyproducts.component';

describe('BuyproductsComponent', () => {
  let component: BuyproductsComponent;
  let fixture: ComponentFixture<BuyproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyproductsComponent]
    });
    fixture = TestBed.createComponent(BuyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
