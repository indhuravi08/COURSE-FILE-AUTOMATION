import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedialActionsComponent } from './remedial-actions.component';

describe('RemedialActionsComponent', () => {
  let component: RemedialActionsComponent;
  let fixture: ComponentFixture<RemedialActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemedialActionsComponent]
    });
    fixture = TestBed.createComponent(RemedialActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
