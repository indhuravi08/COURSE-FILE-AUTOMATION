import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamModulesComponent } from './exam-modules.component';

describe('ExamModulesComponent', () => {
  let component: ExamModulesComponent;
  let fixture: ComponentFixture<ExamModulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamModulesComponent]
    });
    fixture = TestBed.createComponent(ExamModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
