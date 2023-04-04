import { TestBed } from '@angular/core/testing';

import { FindMngService } from './find-mng.service';

describe('FindMngService', () => {
  let service: FindMngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindMngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
