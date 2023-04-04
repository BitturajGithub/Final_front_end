import { TestBed } from '@angular/core/testing';

import { ShowLeaveService } from './show-leave.service';

describe('ShowLeaveService', () => {
  let service: ShowLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
