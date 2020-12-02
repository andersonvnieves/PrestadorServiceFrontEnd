import { TestBed } from '@angular/core/testing';

import { PrestadorApiService } from './prestador-api.service';

describe('PrestadorApiService', () => {
  let service: PrestadorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestadorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
