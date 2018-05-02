import { TestBed, inject } from '@angular/core/testing';

import { ConclaveService } from './conclave.service';

describe('ConclaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConclaveService]
    });
  });

  it('should be created', inject([ConclaveService], (service: ConclaveService) => {
    expect(service).toBeTruthy();
  }));
});
