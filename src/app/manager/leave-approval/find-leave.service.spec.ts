import { TestBed } from '@angular/core/testing';

import { FindLeaveService } from './find-leave.service';

describe('FindLeaveService', () => {
  let service: FindLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
