import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsoComponent } from './pso.component';

describe('PsoComponent', () => {
  let component: PsoComponent;
  let fixture: ComponentFixture<PsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsoComponent]
    });
    fixture = TestBed.createComponent(PsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
