import { TestBed } from '@angular/core/testing';

import { LogiService } from './logi.service';

describe('LogiService', () => {
  let service: LogiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
