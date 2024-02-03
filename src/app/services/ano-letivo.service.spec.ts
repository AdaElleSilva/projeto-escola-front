import { TestBed } from '@angular/core/testing';

import { AnoLetivoService } from './ano-letivo.service';

describe('AnoLetivoService', () => {
  let service: AnoLetivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnoLetivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
