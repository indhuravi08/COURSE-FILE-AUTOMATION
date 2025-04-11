import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pt2Component } from './pt2.component';

describe('Pt2Component', () => {
  let component: Pt2Component;
  let fixture: ComponentFixture<Pt2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pt2Component]
    });
    fixture = TestBed.createComponent(Pt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
