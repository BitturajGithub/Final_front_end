import { TestBed } from '@angular/core/testing';

import { FindTaskServiceService } from './find-task-service.service';

describe('FindTaskServiceService', () => {
  let service: FindTaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindTaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
