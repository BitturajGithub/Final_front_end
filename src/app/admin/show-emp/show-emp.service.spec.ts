import { TestBed } from '@angular/core/testing';

import { ShowEmpService } from './show-emp.service';

describe('ShowEmpService', () => {
  let service: ShowEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
