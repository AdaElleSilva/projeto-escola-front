import { TestBed } from '@angular/core/testing';

import { PeriodoAulaService } from './periodo-aula.service';

describe('PeriodoAulaService', () => {
  let service: PeriodoAulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodoAulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
