import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateCoPoComponent } from './evaluate-co-po.component';

describe('EvaluateCoPoComponent', () => {
  let component: EvaluateCoPoComponent;
  let fixture: ComponentFixture<EvaluateCoPoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluateCoPoComponent]
    });
    fixture = TestBed.createComponent(EvaluateCoPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
