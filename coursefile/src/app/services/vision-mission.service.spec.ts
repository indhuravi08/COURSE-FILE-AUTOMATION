import { TestBed } from '@angular/core/testing';

import { VisionMissionService } from './vision-mission.service';

describe('VisionMissionService', () => {
  let service: VisionMissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisionMissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
