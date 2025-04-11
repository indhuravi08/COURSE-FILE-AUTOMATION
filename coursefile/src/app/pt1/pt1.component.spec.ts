import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pt1Component } from './pt1.component';

describe('Pt1Component', () => {
  let component: Pt1Component;
  let fixture: ComponentFixture<Pt1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pt1Component]
    });
    fixture = TestBed.createComponent(Pt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
