import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHorarioAulaComponent } from './lista-horario-aula.component';

describe('ListaHorarioAulaComponent', () => {
  let component: ListaHorarioAulaComponent;
  let fixture: ComponentFixture<ListaHorarioAulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaHorarioAulaComponent]
    });
    fixture = TestBed.createComponent(ListaHorarioAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
