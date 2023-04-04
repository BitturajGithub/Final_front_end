import { TestBed } from '@angular/core/testing';

import { ShowMngService } from './show-mng.service';

describe('ShowMngService', () => {
  let service: ShowMngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowMngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
