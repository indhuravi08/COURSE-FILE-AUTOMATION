import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remedial2Component } from './remedial2.component';

describe('Remedial2Component', () => {
  let component: Remedial2Component;
  let fixture: ComponentFixture<Remedial2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Remedial2Component]
    });
    fixture = TestBed.createComponent(Remedial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
