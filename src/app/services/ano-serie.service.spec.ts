import { TestBed } from '@angular/core/testing';

import { AnoSerieService } from './ano-serie.service';

describe('AnoSerieService', () => {
  let service: AnoSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnoSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
