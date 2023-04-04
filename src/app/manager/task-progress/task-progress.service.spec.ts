import { TestBed } from '@angular/core/testing';

import { TaskProgressService } from './task-progress.service';

describe('TaskProgressService', () => {
  let service: TaskProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
