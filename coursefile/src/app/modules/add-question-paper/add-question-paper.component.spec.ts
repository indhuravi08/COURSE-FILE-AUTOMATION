import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionPaperComponent } from './add-question-paper.component';

describe('AddQuestionPaperComponent', () => {
  let component: AddQuestionPaperComponent;
  let fixture: ComponentFixture<AddQuestionPaperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddQuestionPaperComponent]
    });
    fixture = TestBed.createComponent(AddQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
