import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCidadeComponent } from './cadastro-cidade.component';

describe('CadastroCidadeComponent', () => {
  let component: CadastroCidadeComponent;
  let fixture: ComponentFixture<CadastroCidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCidadeComponent]
    });
    fixture = TestBed.createComponent(CadastroCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
