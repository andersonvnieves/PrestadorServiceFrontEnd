import { TestBed } from '@angular/core/testing';

import { EnderecoApiService } from './endereco-api.service';

describe('EnderecoApiService', () => {
  let service: EnderecoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
