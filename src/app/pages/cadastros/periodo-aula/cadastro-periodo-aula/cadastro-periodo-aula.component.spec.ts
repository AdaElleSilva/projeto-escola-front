import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPeriodoAulaComponent } from './cadastro-periodo-aula.component';

describe('CadastroPeriodoAulaComponent', () => {
  let component: CadastroPeriodoAulaComponent;
  let fixture: ComponentFixture<CadastroPeriodoAulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPeriodoAulaComponent]
    });
    fixture = TestBed.createComponent(CadastroPeriodoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
