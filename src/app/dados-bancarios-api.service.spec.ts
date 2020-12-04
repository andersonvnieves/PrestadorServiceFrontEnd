import { TestBed } from '@angular/core/testing';

import { DadosBancariosApiService } from './dados-bancarios-api.service';

describe('DadosBancariosApiService', () => {
  let service: DadosBancariosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosBancariosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
