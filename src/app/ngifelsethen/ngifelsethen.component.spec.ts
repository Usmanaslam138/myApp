import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgifelsethenComponent } from "./ngifelsethen.component";

describe("NgifelsethenComponent", () => {
  let component: NgifelsethenComponent;
  let fixture: ComponentFixture<NgifelsethenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgifelsethenComponent],
    });
    fixture = TestBed.createComponent(NgifelsethenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
