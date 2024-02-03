import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfessorTurmaComponent } from './lista-professor-turma.component';

describe('ListaProfessorTurmaComponent', () => {
  let component: ListaProfessorTurmaComponent;
  let fixture: ComponentFixture<ListaProfessorTurmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProfessorTurmaComponent]
    });
    fixture = TestBed.createComponent(ListaProfessorTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
