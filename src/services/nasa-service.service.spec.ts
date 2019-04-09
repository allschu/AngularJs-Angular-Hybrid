import { TestBed } from '@angular/core/testing';

import { NasaServiceService } from './nasa-service.service';

describe('NasaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaServiceService = TestBed.get(NasaServiceService);
    expect(service).toBeTruthy();
  });
});
