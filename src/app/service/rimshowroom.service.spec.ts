import { TestBed } from '@angular/core/testing';

import { RimshowroomService } from './rimshowroom.service';

describe('ShowroomService', () => {
  let service: RimshowroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RimshowroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
