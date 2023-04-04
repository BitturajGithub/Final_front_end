import { TestBed } from '@angular/core/testing';

import { CheckTaskService } from './check-task.service';

describe('CheckTaskService', () => {
  let service: CheckTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
