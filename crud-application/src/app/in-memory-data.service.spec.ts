import { TestBed } from '@angular/core/testing';

import { InMemoryDatabaseService } from './in-memory-database.service';

describe('InMemoryDataService', () => {
  let service: InMemoryDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
