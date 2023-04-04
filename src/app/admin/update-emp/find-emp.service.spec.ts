import { TestBed } from '@angular/core/testing';

import { FindEmpService } from './find-emp.service';

describe('FindEmpService', () => {
  let service: FindEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
