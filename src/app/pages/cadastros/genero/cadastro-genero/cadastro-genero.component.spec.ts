import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGeneroComponent } from './cadastro-genero.component';

describe('CadastroGeneroComponent', () => {
  let component: CadastroGeneroComponent;
  let fixture: ComponentFixture<CadastroGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroGeneroComponent]
    });
    fixture = TestBed.createComponent(CadastroGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});