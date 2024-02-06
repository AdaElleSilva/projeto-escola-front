import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAnoLetivoComponent } from './cadastro-ano-letivo.component';

describe('CadastroAnoLetivoComponent', () => {
  let component: CadastroAnoLetivoComponent;
  let fixture: ComponentFixture<CadastroAnoLetivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAnoLetivoComponent]
    });
    fixture = TestBed.createComponent(CadastroAnoLetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
