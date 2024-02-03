import { TestBed } from '@angular/core/testing';

import { HorarioAulaService } from './horario-aula.service';

describe('HorarioAulaService', () => {
  let service: HorarioAulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorarioAulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
