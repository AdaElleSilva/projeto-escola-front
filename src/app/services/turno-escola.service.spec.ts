import { TestBed } from '@angular/core/testing';

import { TurnoEscolaService } from './turno-escola.service';

describe('TurnoEscolaService', () => {
  let service: TurnoEscolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurnoEscolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
