import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectcomComponent } from './subjectcom.component';

describe('SubjectcomComponent', () => {
  let component: SubjectcomComponent;
  let fixture: ComponentFixture<SubjectcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectcomComponent]
    });
    fixture = TestBed.createComponent(SubjectcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
