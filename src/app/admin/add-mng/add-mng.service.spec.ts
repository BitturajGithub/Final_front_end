import { TestBed } from '@angular/core/testing';

import { AddMngService } from './add-mng.service';

describe('AddMngService', () => {
  let service: AddMngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
