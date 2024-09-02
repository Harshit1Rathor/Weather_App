import { TestBed } from '@angular/core/testing';

import { DataExtractService } from './data-extract.service';

describe('DataExtractService', () => {
  let service: DataExtractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataExtractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
