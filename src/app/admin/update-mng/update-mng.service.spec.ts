import { TestBed } from '@angular/core/testing';

import { UpdateMngService } from './update-mng.service';

describe('UpdateMngService', () => {
  let service: UpdateMngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
