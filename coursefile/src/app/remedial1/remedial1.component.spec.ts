import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remedial1Component } from './remedial1.component';

describe('Remedial1Component', () => {
  let component: Remedial1Component;
  let fixture: ComponentFixture<Remedial1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Remedial1Component]
    });
    fixture = TestBed.createComponent(Remedial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
