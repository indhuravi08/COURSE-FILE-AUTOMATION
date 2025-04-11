import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswerScriptsComponent } from './add-answer-scripts.component';

describe('AddAnswerScriptsComponent', () => {
  let component: AddAnswerScriptsComponent;
  let fixture: ComponentFixture<AddAnswerScriptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAnswerScriptsComponent]
    });
    fixture = TestBed.createComponent(AddAnswerScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
