import { TestBed } from '@angular/core/testing';

import { MatriculaSituacaoService } from './matricula-situacao.service';

describe('MatriculaSituacaoService', () => {
  let service: MatriculaSituacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculaSituacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
