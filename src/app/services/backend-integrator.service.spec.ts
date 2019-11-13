import { TestBed } from '@angular/core/testing';

import { BackendIntegratorService } from './backend-integrator.service';

describe('BackendIntegratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendIntegratorService = TestBed.get(BackendIntegratorService);
    expect(service).toBeTruthy();
  });
});
