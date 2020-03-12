import { TestBed } from '@angular/core/testing';

import { AddAssignmentService } from './add-assignment.service';

describe('AddAssignmentService', () => {
  let service: AddAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
